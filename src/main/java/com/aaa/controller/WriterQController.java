package com.aaa.controller;

import com.aaa.entity.*;
import com.aaa.service.*;
import com.aaa.util.UploadUtil;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/writerQ")
public class WriterQController {

    @Resource
    WriterService writerService;

    @Resource
    MessageQService messageQService;

    @Resource
    MessageService messageService;

    @Resource
    SectionService sectionService;

    @Resource
    TypeService typeService;

    //检测用户是否已申请作家
    @RequestMapping("/queryWriterByReader")
    public String queryWriterByReader(HttpSession httpSession){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        if (reader == null){
            return "login";
        }else {
            Integer readerid = reader.getRid();
            List<Writer> writers = writerService.queryWriterByReader(readerid);
            if (writers.size() == 0) {
                System.out.println("null");
                return "WriterLogin";
            } else {
                System.out.println(writers);
                Integer writerid = writers.get(0).getWid();
                return "redirect:/writerQ/queryJobPlace?writerid=" + writerid;
            }
        }
    }

    //添加作家信息（校验是否已存在该作家）
    @RequestMapping("verifyByWname")
    @ResponseBody
    public String verifyByWname(String wname){
        Writer w = writerService.QueryByWriterName(wname);
        if (w != null){
            return "1";
        }else {
            return "0";
        }
    }

    //添加作家信息（校验是否已存在该作家）
    @RequestMapping("addWriter")
    public String addWriter(HttpSession httpSession, String wname, String ana){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        String wphoto = reader.getRphoto();
        Writer w = writerService.QueryByWriterName(wname);
        if (w != null){
            return "已存在";
        }else {
            Writer writer = new Writer(wname,wphoto,ana,readerid);
            writerService.addWriter(writer);
            Writer w1 = writerService.QueryByWriterName(wname);
            Integer writerid = w1.getWid();
            return "redirect:/writerQ/queryJobPlace?writerid="+writerid;
        }
    }

    //查询作家所有作品
    @RequestMapping("/queryAllMessageByWriter")
    public String queryAllMessageByWriter(HttpSession httpSession,Model model,Integer writerid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        List<Message> messages = messageQService.queryMessByWriter(writerid);
        if (messages.size() == 0){
            return "MessageGuanliNull";
        }else{
            //根据作家查询小说（该作家所有的小说）
            List<Message> AllMessage = messageQService.queryAllMessByWriter(writerid);
            model.addAttribute("AllMessage",AllMessage);
            //查询小说最新章节
            List<Section> NewSection = sectionService.queryNewSectionByWriterMessage(writerid);
            model.addAttribute("NewSection",NewSection);
            //查询作家信息
            List<Writer> writers = writerService.queryWriterByReader(readerid);
            model.addAttribute("writers",writers);
            return "MessageGuanli";
        }
    }

    //查询作家信息和作家最新的一个作品，若没有显示创建
    @RequestMapping("/queryJobPlace")
    public String queryJobPlace(HttpSession httpSession,Model model,Integer writerid){
        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        List<Message> messages = messageQService.queryMessByWriter(writerid);
        if (messages.size() == 0){
            //查询作家信息
            List<Writer> writers = writerService.queryWriterByReader(readerid);
            model.addAttribute("writers",writers);
            //作家信息之作品总量
            List<Message> messageCount = messageQService.queryMessageCountByWriter(writerid);
            model.addAttribute("messageCount",0);
            //作家信息之累计字数
            List<Section> Number = messageQService.queryNumberByWriter(writerid);
            model.addAttribute("Number",0);
            //作家信息之累计阅读数
            List<Dynamic> readerNumber = messageQService.queryReadNumberByWriter(writerid);
            model.addAttribute("readerNumber",0);
            return "JobPlaceNull";
        }else{
            //查询作家信息
            List<Writer> writers = writerService.queryWriterByReader(readerid);
            model.addAttribute("writers",writers);
            //作家信息之作品总量
            List<Message> messageCount = messageQService.queryMessageCountByWriter(writerid);
            model.addAttribute("messageCount",messageCount.get(0).getCount());
            //作家信息之累计字数
            List<Section> Number = messageQService.queryNumberByWriter(writerid);
            model.addAttribute("Number",Number.get(0).getSum());
            //作家信息之累计阅读数
            List<Dynamic> readerNumber = messageQService.queryReadNumberByWriter(writerid);
            model.addAttribute("readerNumber",readerNumber.get(0).getCount());
            //根据作家查询小说（该作家最新的小说）
            List<Message> newMessage= messageQService.queryMessByWriter(writerid);
            model.addAttribute("newMessage",newMessage);
            //小说页面之最新章节
            List<Section> newSection = messageQService.queryNewSectionByMessage(newMessage.get(0).getMeid());
            if (newSection.get(0).getSid() == null || newSection.get(0).getSid() == 0){
                newMessage.get(0).setMename("无最新章节");
                model.addAttribute("newSection",newSection);
            }else{
                model.addAttribute("newSection",newSection);
            }
            return "JobPlace";
        }
    }

    @RequestMapping("/createMessage")
    public String createMessage(){
        return "CreateMessage1";
    }

    @RequestMapping("chooseChannel")
    public String chooseChannel(Integer channel, Model model){
        if (channel == 0){
            List<Type> types = typeService.queryManChannel();
            model.addAttribute("types",types);
        }else if (channel == 1){
            List<Type> types = typeService.queryWomanChannel();
            model.addAttribute("types",types);
        }else if (channel == 2){
            List<Type> types = typeService.queryOtherChannel();
            model.addAttribute("types",types);
        }
        return "/CreateMessage2";
    }

    @RequestMapping("/addMessage")
    public String addMessage(HttpSession httpSession,Integer typeid, String mename, MultipartFile surface, String synopsis,Model model) throws IOException {
        System.out.println(typeid+mename+surface+synopsis);
        if(surface.isEmpty()){
            return null;
        }

        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        List<Writer> writers = writerService.queryWriterByReader(readerid);
        Integer writerid = writers.get(0).getWid();
        //保存文件
        String filepath = UploadUtil.upload(surface);
        messageService.addMessage(typeid,mename,filepath,synopsis,writerid,0);
        //查询小说信息（根据mename）
        List<Message> MessageXinxi = messageQService.queryLikeMename(mename);
        model.addAttribute("MessageXinxi",MessageXinxi);
        //查询小说章节（根据messageid）
        Integer messageid = MessageXinxi.get(0).getMeid();
        List<Section> MessageSection =messageQService.querySectionAscByMessage(messageid);
        model.addAttribute("MessageSection",MessageSection);
        return "CreateMessage3";
    }

    @RequestMapping("/queryMessageByMename")
    public String queryMessageByMename(Model model,Integer meid){
        //查询小说信息（根据mename）
        List<Message> MessageXinxi = messageQService.queryMeid(meid);
        model.addAttribute("MessageXinxi",MessageXinxi);
        return "Writing";
    }

    @RequestMapping("/findAllSectionByMessage")
    public String findAllSectionByMessage(Model model,Integer messageid){
        //查询小说信息（根据mename）
        List<Message> MessageXinxi = messageQService.queryMeid(messageid);
        model.addAttribute("MessageXinxi",MessageXinxi);
        //正序查询小说章节（根据messageid）
        List<Section> MessageSection =messageQService.querySectionAscByMessage(messageid);
        model.addAttribute("MessageSection",MessageSection);
        //查询小说第一章
        List<Section> Section = sectionService.queryOneSectionByMessage(messageid);
        model.addAttribute("Section",Section);
        return "MessageFabu";
    }

    @RequestMapping("/findMessageXinxi")
    public String findMessageXinxi(Model model,Integer meid){
        //查询小说信息（根据mename）
        List<Message> MessageXinxi = messageQService.queryMeid(meid);
        model.addAttribute("MessageXinxi",MessageXinxi);
        Integer tid = MessageXinxi.get(0).getType().getTid();
        Type type = typeService.getTypeByTid(tid);
        model.addAttribute("type",type);
        List<Type> types = typeService.findAll();
        model.addAttribute("types",types);
        return "MessageXinxi";
    }

    @RequestMapping("/updateMessageXinxi")
    public String updateMessageXinxi(Model model,HttpSession httpSession,Integer meid,Integer typeid, String mename, MultipartFile surface, String synopsis,Integer mestate) throws IOException {
        System.out.println(meid+typeid+mename+surface+synopsis+mestate);
        if(surface.isEmpty()){
            return null;
        }

        Reader reader = (Reader) httpSession.getAttribute("reader");
        Integer readerid = reader.getRid();
        List<Writer> writers = writerService.queryWriterByReader(readerid);
        Integer writerid = writers.get(0).getWid();
        //保存文件
        String filepath = UploadUtil.upload(surface);
        messageService.updateMessage(meid,typeid,mename,filepath,synopsis,writerid,mestate);
        return "CreateMessage3";
    }

    //添加章节
    @RequestMapping("/addSections")
    @ResponseBody
    public Integer addSections(String sname,Integer messageid, String content, Integer number){
        /*Integer messageids = Integer.valueOf(messageid);
        Integer numbers = Integer.valueOf(number);*/
        System.out.println(sname+content);

        return sectionService.addSections(sname,messageid,content,number,new Date());
    }

    //根据小说章节id查询章节内容
    @RequestMapping("/querySectionBySid")
    public String querySectionBySid(Model model,Integer sid,Integer messageid){
        //查询小说信息（根据mename）
        List<Message> MessageXinxi = messageQService.queryMeid(messageid);
        model.addAttribute("MessageXinxi",MessageXinxi);
        //正序查询小说章节（根据messageid）
        List<Section> MessageSection =messageQService.querySectionAscByMessage(messageid);
        model.addAttribute("MessageSection",MessageSection);
        List<Section> Section = sectionService.querySectionBySid(sid);
        model.addAttribute("Section",Section);
        return "MessageFabu";
    }

    //根据小说章节id查询章节内容
    @RequestMapping("/querySectionBySids")
    public String querySectionBySids(Model model,Integer messageid,Integer sid){
        //查询小说信息（根据mename）
        List<Message> MessageXinxi = messageQService.queryMeid(messageid);
        model.addAttribute("MessageXinxi",MessageXinxi);
        //正序查询小说章节（根据messageid）
        List<Section> MessageSection =messageQService.querySectionAscByMessage(messageid);
        model.addAttribute("MessageSection",MessageSection);
        //根据sid查询章节
        List<Section> Section = sectionService.querySectionBySid(sid);
        model.addAttribute("Section",Section);
        return "MessageFabuUpdate";
    }

    //修改章节内容
    @RequestMapping("/updateSection")
    @ResponseBody
    public Integer updateSection(Integer sid,String sname,String content,Integer number){
        return sectionService.updateSection(sid,sname,content,number);
    }
    //删除指定的章节
    @RequestMapping("/delSection")
    public String delSection(Integer sid,Integer messageid){
        sectionService.delSection(sid);
        return "redirect:/writerQ/findAllSectionByMessage?messageid="+messageid;
    }
}

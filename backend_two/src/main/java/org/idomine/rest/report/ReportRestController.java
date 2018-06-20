package org.idomine.rest.report;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsPdfView;

@CrossOrigin(origins = "*")
@Controller
public class ReportRestController
{
    @Autowired
    private ApplicationContext appContext;
 
    @GetMapping({ "/api/report" })
    public ModelAndView report()
    {
        return erroReport();
    }

 
    private ModelAndView erroReport()
    {
        JasperReportsPdfView view = new JasperReportsPdfView();
        view.setUrl("classpath:repPDF.jrxml");
        view.setApplicationContext(appContext);
        Map<String, Object> params = new HashMap<>();
        params.put("datasource", new net.sf.jasperreports.engine.JREmptyDataSource());
        return new ModelAndView(view, params);
    }

 

 

}

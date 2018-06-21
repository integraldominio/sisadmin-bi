package org.idomine.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
//@Profile({"dev","prod","tdd","teste","default"})
public class SwaggerConfig
{

    @Bean
    public Docket docket()
    {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo()
    {
        return new ApiInfoBuilder().title("SISADMIN-BI")
                .description("SpringBoot JWT Angular 6")
                .termsOfServiceUrl("https://github.com/integraldominio/sisadmin-bi/blob/master/LICENSE")
                .licenseUrl("https://github.com/integraldominio/sisadmin-bi/blob/master/LICENSE")
                .license("MIT")
                .version("1.0")
                .build();
    }

}

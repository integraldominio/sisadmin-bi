package com.idomine.bi.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
@Profile({"dev","prod","tdd","teste"})
public class SwaggerConfiguration
{

    @Bean
    public Docket docket()
    {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo());
    }

    @SuppressWarnings("deprecation")
    private ApiInfo apiInfo()
    {
        return new ApiInfoBuilder().title("APIDFE")
                .description("APIDFE referencia para desenvolvedores")
                .termsOfServiceUrl("http://datapar.com.py")
                .contact("lyndon.tavares@datapar.com.py")
                .license("License")
                .licenseUrl("http://datapar.com.py")
                .version("1.0")
                .build();
    }

}

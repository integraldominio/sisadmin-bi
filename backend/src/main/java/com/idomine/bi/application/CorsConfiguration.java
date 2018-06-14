package com.idomine.bi.application;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 
 * - allowedOrigins(): specifies the URI that can be accessed by resource. “*” means that all origins are allowed. If
 * undefined, all origins are allowed.
 * 
 * – allowCredentials(): defines the value for Access-Control-Allow-Credentials response header. If value is true,
 * response to the request can be exposed to the page. The credentials are cookies, authorization headers or TLS client
 * certificates. The default value is true.
 * 
 * – maxAge(): defines maximum age (in seconds) for cache to be alive for a pre-flight request. By default, its value is
 * 1800 seconds.
 * 
 * – allowedMethods(): specifies methods (GET, POST,…) to allow when accessing the resource. If we don’t use this
 * attribute, it takes the value of @RequestMapping method by default. If we specify methods, default method will be
 * overridden.
 * 
 * – allowedHeaders(): defines the values for Access-Control-Allow-Headers response header. We don’t need to list
 * headers if it is one of Cache-Control, Content-Language, Expires, Last-Modified, or Pragma. By default all requested
 * headers are allowed.
 * 
 * – exposedHeaders(): values for Access-Control-Expose-Headers response header. Server uses it to tell the browser
 * about its whitelist headers. By default, an empty exposed header list is used.
 *
 */
@Configuration
public class CorsConfiguration extends WebMvcConfigurerAdapter
{
    @Override
    public void addCorsMappings(CorsRegistry registry)
    {

        registry.addMapping("/customers")
                .allowedOrigins("http://localhost:3000", "http://localhost:8080", "http://localhost:5000")
                .allowedMethods("POST", "GET", "PUT", "DELETE")
                .allowedHeaders("Content-Type")
                .exposedHeaders("header-1", "header-2")
                .allowCredentials(false)
                .maxAge(6000);

    }
}

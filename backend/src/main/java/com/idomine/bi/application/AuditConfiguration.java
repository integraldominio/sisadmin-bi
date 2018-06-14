package com.idomine.bi.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class AuditConfiguration
{
    @Bean
    public AuditorAware<String> auditorAware()
    {

        // () -> SecurityContextHolder
        // .getContext()
        // .getAuthentication()
        // .getName()

        return new NomeUsuario();
    }

    private class NomeUsuario implements AuditorAware<String>
    {
        @Override
        public String getCurrentAuditor()
        {
            return "AFIDFE";
        }

    }
}

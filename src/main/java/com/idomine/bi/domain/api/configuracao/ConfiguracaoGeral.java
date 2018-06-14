package com.idomine.bi.domain.api.configuracao;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@SuppressWarnings("serial")
@Getter
@Setter
@ToString
@Entity
@Table(name="API_CONFIGURACAO")
public class ConfiguracaoGeral  extends AbstractPersistable<Long>
{

    @Basic
    private String intervaloChecagemRecebimento;
    
    @Basic
    private String intervaloEnvioEmails;

}

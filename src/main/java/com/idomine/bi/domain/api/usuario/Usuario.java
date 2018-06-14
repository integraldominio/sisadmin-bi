package com.idomine.bi.domain.api.usuario;

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
@Table(name = "API_USUARIO")
public class Usuario extends AbstractPersistable<Long>
{

    @Basic
    private String login;

    @Basic
    private String senha;
}

package com.idomine.bi.web.rest.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.idomine.bi.domain.api.usuario.Usuario;
import com.idomine.bi.domain.api.usuario.UsuarioService;
import com.idomine.bi.infrastructure.exceptions.EntityNotFoundException;

@RestController
@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_JSON_VALUE })
public class ClienteAutenticacaoResource
{

    @Autowired
    private UsuarioService usuarioService;

    @RequestMapping(path = "login2", method = RequestMethod.POST)
    public Usuario autenticarUsuario2(@RequestBody Usuario usuario) throws EntityNotFoundException
    {
        return usuarioService.autenticarPorLogin(usuario);
    }

}

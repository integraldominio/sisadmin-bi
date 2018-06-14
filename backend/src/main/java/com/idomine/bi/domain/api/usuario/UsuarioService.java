package com.idomine.bi.domain.api.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idomine.bi.infrastructure.exceptions.EntityNotFoundException;

@Service
public class UsuarioService
{
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario autenticarPorLogin(Usuario usuario) throws EntityNotFoundException
    {
        Usuario usu = usuarioRepository.findByLoginIgnoreCase(usuario.getLogin());
        if ( usu==null)
        {
            throw new EntityNotFoundException(Usuario.class, "id", usuario.getLogin());
        }
        return usu;
    }
    
}

package com.idomine.bi.domain.api.usuario;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface UsuarioRepository extends CrudRepository<Usuario, Long>
{
    public Usuario findByLoginIgnoreCase(String login);
}

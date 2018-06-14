package com.idomine.bi.domain.api.configuracao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface ConfiguracaoGeralRepository extends JpaRepository<ConfiguracaoGeral, Long>
{

}

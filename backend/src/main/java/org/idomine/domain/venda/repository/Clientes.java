package org.idomine.domain.venda.repository;

import org.idomine.domain.venda.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

 

public interface Clientes extends JpaRepository<Cliente, Long> {

}

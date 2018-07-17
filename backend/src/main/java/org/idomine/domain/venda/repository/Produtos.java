package org.idomine.domain.venda.repository;

import org.idomine.domain.venda.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
 

public interface Produtos extends JpaRepository<Produto, Long> {

}

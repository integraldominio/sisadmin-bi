package org.idomine.domain.venda.resource;

import java.util.List;

import org.idomine.domain.venda.model.Produto;
import org.idomine.domain.venda.repository.Produtos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 

@CrossOrigin("*")
@RestController
@RequestMapping("/produtos")
public class ProdutosResource {
	
	@Autowired
	private Produtos produtos;
	
	@GetMapping
	public List<Produto> listar() {
		return produtos.findAll();
	}
}

package org.idomine.domain.venda.resource;

import java.util.List;

import org.idomine.domain.venda.model.Cliente;
import org.idomine.domain.venda.repository.Clientes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

 

@CrossOrigin("*")
@RestController
@RequestMapping("/clientes")
public class ClientesResource {
	
	@Autowired
	private Clientes clientes;
	
	@GetMapping
	public List<Cliente> listar() {
		return clientes.findAll();
	}
}

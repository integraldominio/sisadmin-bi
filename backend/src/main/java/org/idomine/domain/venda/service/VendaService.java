package org.idomine.domain.venda.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.idomine.domain.venda.model.Venda;
import org.idomine.domain.venda.repository.Produtos;
import org.idomine.domain.venda.repository.Vendas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VendaService {
    
    @Autowired
    private Vendas vendas;
    
    @Autowired
    private Produtos produtos;
    
    public Venda adicionar(Venda venda) {
        venda.setCadastro(LocalDateTime.now());
        venda.getItens().forEach(i -> {
            i.setVenda(venda);
            i.setProduto(produtos.findOne(i.getProduto().getId()));
        });
        
        BigDecimal totalItens = venda.getItens().stream()
                .map(i -> i.getProduto().getValor().multiply(new BigDecimal(i.getQuantidade())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        venda.setTotal(totalItens.add(venda.getFrete()));
        
        return vendas.save(venda);
    }
}

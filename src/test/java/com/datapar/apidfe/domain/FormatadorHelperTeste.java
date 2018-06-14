package com.datapar.apidfe.domain;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.idomine.bi.infrastructure.helper.StringsHelper;

public class FormatadorHelperTeste
{

    @Test
    public void preencherComZeroAEsquerda()
    {
        Long codigo = 123456L;
        System.out.println("codigo sem zero...:" + codigo);
        String codigoFormatado = StringsHelper.preencheComZeroAEsquerda(codigo, 10);
        System.out.println("codigo com zero...:" + codigoFormatado);

        assertTrue("Retorno = " + codigoFormatado, codigoFormatado.toString().length() == 10);
    }
    

    @Test
    public void converterDataPadraoCDC()
    {
        
        
        //String dataFormatada = FormatadorHelper.formataDataPadraoCDC(LocalDateTime.now());
        //System.out.println(dataFormatada);

        //assertTrue("data formatada...:" + dataFormatada, dataFormatada.toString().length() == 8);
    }
    
}

package com.idomine.bi.infrastructure.helper;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

public final class StringsHelper
{
    private StringsHelper()
    {
    }

    public static String preencheComZeroAEsquerda(String numero, int tamanhoExato)
    {
        String stringRetorno = numero.trim();
        int tamanhoNumero = stringRetorno.length();
        String numeroComZeros = "00000000000000000000" + stringRetorno;
        return numeroComZeros.substring(20 - (tamanhoExato - tamanhoNumero));
    }

    public static String preencheComZeroAEsquerda(Long numero, long tamanhoExato)
    {
        return String.format("%0" + tamanhoExato + "d", numero);
    }

    public static String formataDataPadraoCDC(Date data)
    {
        LocalDate lData = dateToLocalDate(data);

        String retorno = preencheComZeroAEsquerda(Long.valueOf(lData.getDayOfMonth()), 2) +
                preencheComZeroAEsquerda(Long.valueOf(lData.getMonthValue()), 2) +
                String.valueOf(lData.getYear());
        return retorno;
    }

    public static LocalDate dateToLocalDate(Date data)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(data);
        LocalDate localDate = LocalDate.of(cal.get(Calendar.YEAR),
                cal.get(Calendar.MONTH) + 1,
                cal.get(Calendar.DAY_OF_MONTH));
        return localDate;
    }
    
    public static String retornaStringVazia(String string)
    {
        return string == null || string.trim().equals(String.valueOf("0").trim())? "" : string;
    }
    

}

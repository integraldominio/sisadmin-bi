package com.idomine.bi.infrastructure.helper;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public final class DataHoraHelper
{

    private DataHoraHelper()
    {
    }

    public static String dataString(Date data)
    {
        String pattern = "dd/MM/yyyy HH:mm:ss";
        SimpleDateFormat format = new SimpleDateFormat(pattern);
        return format.format(data);
    }

    public static int ano(Date data)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(data);
        int mes = cal.get(Calendar.YEAR);
        return mes;
    }

    public static int mes(Date data)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(data);
        int mes = cal.get(Calendar.MONTH) + 1;
        return mes;
    }

    public static int dia(Date data)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(data);
        int dia = cal.get(Calendar.DAY_OF_MONTH);
        return dia;
    }

    public static int segundo(Date data)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(data);
        int segundo = cal.get(Calendar.SECOND);
        return segundo;
    }

    public static String formataDataDiaMesAnoHora(Date data)
    {
        if (data != null)
        {
            String pattern = "dd/MM/yyyy HH:mm:ss";
            SimpleDateFormat format = new SimpleDateFormat(pattern);
            return format.format(data);
        }
        return null;

    }

    public static String formataDataDiaMesAno(Date data)
    {
        if (data != null)
        {
            String pattern = "dd/MM/yyyy";
            SimpleDateFormat format = new SimpleDateFormat(pattern);
            return format.format(data);
        }
        return null;

    }

}

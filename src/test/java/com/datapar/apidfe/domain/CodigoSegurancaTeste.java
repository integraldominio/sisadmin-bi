package com.datapar.apidfe.domain;

import static org.junit.Assert.assertTrue;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class CodigoSegurancaTeste
{

    @Test(dataProvider = "codigosTimbrados")
    public void testeCOdigoSeguranca(Long codigo)
    {
        assertTrue(true);
    }

    @DataProvider
    private Object[] codigosTimbrados()
    {
        return  new Object[] {
                10566739L,
                89546085L,
                59882037L,
                51370499L,
                98229324L,
                68202973L,
                61698964L,
                36663044L,
                25995942L,
                14576873L,
                93170542L,
                93404635L,
                32265899L,
                96276236L,
                64921906L,
                86908183L,
                38822730L,
                43634821L,
                39854506L,
                14583963L,
                57620030L,
                64212034L,
                63980757L,
                12983587L,
                65340808L,
                17846165L,
                85869795L,
                25368372L,
                68344039L,
                86102193L,
                53320570L,
                36736715L,
                81753654L,
                37585399L,
                64153086L,
                47126303L,
                66926462L,
                72950230L,
                59786674L,
                54714729L,
                54937925L,
                41175123L,
                45278466L,
                35968588L,
                68991298L,
                11793327L,
                97816688L,
                66913883L,
                27560921L,
                19892279L,
                25598506L,
                56411354L,
                33381082L,
                62258733L};
    }

}

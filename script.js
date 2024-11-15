document.addEventListener('DOMContentLoaded', () => {
  const fragrances = [
    { name: 'Dior Sauvage', gender: 'him', description: 'A fragrance for men that embodies freshness and sophistication.', image: 'img/Dior Sauvage.jpg', link: 'https://www.amazon.com/Sauvage-Cologne-Men-Eau-Toilette/dp/B0DCJWHBHB/ref=asc_df_B0DCJWHBHB?mcid=91a1eb492ae539aa90437f277360ec32&tag=hyprod-20&linkCode=df0&hvadid=708243274531&hvpos=&hvnetw=g&hvrand=14159184729861878933&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-2370758138540&psc=1' },
    { name: 'Chanel No. 5', gender: 'her', description: 'A timeless fragrance for women, with floral and powdery notes.', image: 'img/Chanel No. 5.jpeg', link: 'https://www.sephora.com/product/chanel-n5-P65510?country_switch=us&lang=en&skuId=43711&om_mmc=ppc-GG_20694559161___43711__9195529_c&gclsrc=aw.ds&gad_source=1&gclid=EAIaIQobChMIi4THz43diQMVoYVaBR0gJyj8EAQYASABEgInbfD_BwE' },
    { name: 'Tom Ford Black Orchid', gender: 'her', description: 'A bold and luxurious fragrance with floral, fruity, and spicy notes.', image: 'img/Tom Ford Black Orchid.jpeg', link: 'https://www.macys.com/shop/product/tom-ford-2-pc.-black-orchid-eau-de-parfum-gift-set?ID=18765907&pla_country=US&CAGPSPN=pla&trackingid=450x1057768954&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=Google_Beauty_PLA&m_ag=Google_PLA_Beauty_TomFord&m_cn=GGL_PLA_Beauty&m_pi=go_cmp-21077927976_adg-160369947975_ad-694051419092_pla-2311318729084_dev-c_ext-_prd-888066158763USA&gad_source=1&gclid=EAIaIQobChMIqd_HxY7diQMVDFN_AB2GmC0mEAQYAiABEgI1sfD_BwE' },
    { name: 'Acqua di Gio', gender: 'him', description: 'A fresh and aquatic fragrance with notes of jasmine, rosemary, and citrus.', image: 'img/Acqua di Gio.jpeg', link: 'https://www.walmart.com/ip/Giorgio-Armani-Acqua-Di-Gio-Eau-De-Toilette-Cologne-for-Men-3-4-oz/25519885?wmlspartner=wlpa&selectedSellerId=101039655&adid=2222222222725519885_101039655_173147140227_20994038062&wl0=&wl1=g&wl2=c&wl3=720407906572&wl4=pla-2014781053380&wl5=9195529&wl6=&wl7=&wl8=&wl9=pla&wl10=271593595&wl11=online&wl12=25519885_101039655&veh=sem&gad_source=1&gclid=EAIaIQobChMI9dzfnI_diQMVAi3UAR0-IQwPEAQYAiABEgIFKPD_BwE' },
    { name: 'Creed Aventus', gender: 'him', description: 'A fruity and smoky fragrance with notes of pineapple, birch, and musk.', image: 'img/Creed Aventus.jpeg', link: 'https://www.fragrancenet.com/cologne/creed/creed-aventus/eau-de-parfum?gclid=EAIaIQobChMIwPS53Y_diQMVZYZaBR25QjsKEAQYCCABEgK0HfD_BwE&mv_pc=gawus_pla_c_x_20379311721_288146&utm_campaign=x&utm_medium=cpc&utm_source=google_us#288146' },
    { name: 'Yves Saint Laurent Black Opium', gender: 'her', description: 'A dark and sweet fragrance with notes of coffee, vanilla, and white flowers.', image: 'img/Yves Saint Laurent Black Opium.jpeg', link: 'https://www.fragrancenet.com/perfume/yves-saint-laurent/black-opium/eau-de-parfum?gclid=EAIaIQobChMIsfjwoZDdiQMV1rdaBR3EGz2MEAQYASABEgL0DvD_BwE&mv_pc=gawus_pla_c_x_20379311721_263013&utm_campaign=x&utm_medium=cpc&utm_source=google_us#263013' },

    // New fragrances (60+)
    { name: 'Bleu de Chanel', gender: 'him', description: 'A sophisticated fragrance with notes of citrus, woods, and amber.', image: 'img/Bleu de Chanel.jpeg', link: 'https://www.macys.com/shop/product/bleu-de-chanel-eau-de-toilette-fragrance-collection-for-men?gad_source=1&pla_country=US&m_ac=Google_Beauty_PLA&m_ag=Google_LIA_Beauty_Fragrance_Chanel&m_cn=GGL_LIA_Beauty_Fragrance&CAGPSPN=pla&m_sc=sem&gclid=EAIaIQobChMIk5r1icXeiQMV-m5_AB1pxjEcEAQYBiABEgIeRPD_BwE&m_sb=Google&m_pi=go_cmp-19733274699_adg-147287056460_ad-649549356464_pla-2027307718997_dev-c_ext-_prd-3145891074604USA&ID=487374&m_tp=LIA&trackingid=450x1055152414' },
    { name: 'Dolce & Gabbana Light Blue', gender: 'him', description: 'A fresh, fruity fragrance with citrus notes and a musky base.', image: 'img/Dolce & Gabbana Light Blue.jpeg', link: 'https://www.fragrancenet.com/perfume/dolce-and-gabbana/d-and-g-light-blue/edt#120682' },
    { name: 'Gucci Guilty', gender: 'her', description: 'A warm floral fragrance with notes of peach, pink pepper, and amber.', image: 'img/Gucci Guilty.jpg', link: 'https://www.amazon.com/GUCCI-GUILTY-HOMME-Gucci-PARFUM/dp/B086BKWYKT/ref=asc_df_B086BKWYKT?mcid=870cb187ec6c3261936d60e4ae1569b7&tag=hyprod-20&linkCode=df0&hvadid=693031565487&hvpos=&hvnetw=g&hvrand=3659670848235468060&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-1117829288352&psc=1' },
    { name: 'Viktor & Rolf Flowerbomb', gender: 'her', description: 'A floral explosion with notes of jasmine, orange flower, and patchouli.', image: 'img/Viktor & Rolf Flowerbomb.jpeg', link: 'https://www.walmart.com/ip/Viktor-and-Rolf-Flowerbomb-Perfume-for-Women-3-4-Oz/27137781?wmlspartner=wlpa&selectedSellerId=101020356&gclsrc=aw.ds&&adid=2222222222727137781_101020356_151640355260_20323124796&wl0=&wl1=g&wl2=c&wl3=664268471187&wl4=pla-1838963722464&wl5=9195529&wl6=&wl7=&wl8=&wl9=pla&wl10=273308790&wl11=online&wl12=27137781_101020356&veh=sem&gad_source=4&gclid=EAIaIQobChMIlrre9sbeiQMVITfUAR3zHCShEAQYAiABEgJRHPD_BwE' },
    { name: 'Paco Rabanne 1 Million', gender: 'him', description: 'A luxurious and spicy fragrance with cinnamon, rose, and amber.', image: 'img/Paco Rabanne 1 Million.jpeg', link: 'https://www.walmart.com/ip/Paco-Rabanne-1-Million-Cologne-for-Men-3-4-Oz/28544773?wmlspartner=wlpa&selectedSellerId=101259859&gclsrc=aw.ds&&adid=2222222222728544773_101259859_173163671692_21743329142&wl0=&wl1=g&wl2=c&wl3=714686464261&wl4=pla-2388169451754&wl5=9195529&wl6=&wl7=&wl8=&wl9=pla&wl10=736880757&wl11=online&wl12=28544773_101259859&veh=sem&gad_source=4&gclid=EAIaIQobChMI8bHO0cfeiQMViTbUAR15GQlgEAQYAiABEgLYBvD_BwE' },
    { name: 'Yves Saint Laurent La Nuit De L\'Homme', gender: 'him', description: 'A spicy and woody fragrance with cardamom, cedar, and bergamot.', image: 'img/Homme.jpeg', link: 'https://www.amazon.com/Saint-Laurent-Lhomme-Toilette-Spray/dp/B0080GG0LY?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1KWJVS57NX03I' },
    { name: 'Lancome La Vie Est Belle', gender: 'her', description: 'A sweet, floral fragrance with iris, patchouli, and gourmand notes.', image: 'img/Lancome La Vie Est Belle.jpeg', link: 'https://www.sephora.com/product/la-vie-est-belle-P375939?country_switch=us&lang=en&skuId=1460005&om_mmc=ppc-GG_17234313526___1460005__9195529_c&country_switch=us&lang=en&gad_source=4&gclid=EAIaIQobChMI7eHl8dTeiQMVHVN_AB1KiBSuEAQYCSABEgK9OPD_BwE&gclsrc=aw.ds' },
    { name: 'Hermes Terre d\'Hermes', gender: 'him', description: 'A woody, earthy fragrance with notes of orange, vetiver, and cedarwood.', image: 'img/Hermes.jpeg', link: 'https://www.macys.com/shop/product/terre-dhermes-eau-de-toilette-spray-3.3-oz.?ID=14106516&pla_country=US&CAGPSPN=pla&trackingid=450x1055109121&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=Google_Beauty_PLA&m_ag=Google_PLA_Beauty_Fragrance_Hermes&m_cn=GGL_PLA_Beauty_Fragrance&m_pi=go_cmp-19742165753_adg-146045601349_ad-649484789500_pla-2016135371687_dev-c_ext-_prd-3346130009603USA&gad_source=4&gclid=EAIaIQobChMIpbewx9XeiQMVwSzUAR1T-AitEAQYAyABEgKjIPD_BwE' },
    { name: 'Jean Paul Gaultier Le Male elixir', gender: 'him', description: 'A sweet, spicy fragrance with lavender, mint, and vanilla notes.', image: 'img/Jean Paul Gaultier Le Male elixir.jpg', link: 'https://www.amazon.com/Jean-Paul-Gaultier-Elixir-Parfum/dp/B0C5RWQHBY/ref=asc_df_B0C5RWQHBY?mcid=35449c2aee4438c2990fbb3fc494541e&tag=hyprod-20&linkCode=df0&hvadid=693425087232&hvpos=&hvnetw=g&hvrand=16914251384388006122&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-2189509173720&psc=1' },
    { name: 'Armani Code', gender: 'him', description: 'A seductive fragrance with notes of tonka bean, leather, and citrus.', image: 'img/Armani Code.jpeg', link: 'https://www.walmart.com/ip/Giorgio-Armani-Code-Cologne-for-Men-4-2-Oz/25461129?wmlspartner=wlpa&selectedSellerId=101181566&gclsrc=aw.ds&&adid=2222222222725461129_101181566_157416698110_20558033911&wl0=&wl1=g&wl2=c&wl3=674106638816&wl4=pla-1836288134862&wl5=9195529&wl6=&wl7=&wl8=&wl9=pla&wl10=575567141&wl11=online&wl12=25461129_101181566&veh=sem&gad_source=4&gclid=EAIaIQobChMIwM2l69beiQMVClN_AB1TjBJlEAQYAiABEgK_GvD_BwE' },
    { name: 'Chanel Chance', gender: 'her', description: 'A vibrant fragrance with notes of jasmine, pink pepper, and patchouli.', image: 'img/Chanel Chance.jpeg', link: 'https://www.sephora.com/product/chance-eau-tendre-P258612?country_switch=us&lang=en&skuId=1663632&om_mmc=ppc-GG_20694559161___1663632__9195529_c&gad_source=4&gclid=EAIaIQobChMIo4vepNfeiQMVwnJ_AB1ZLh2uEAQYAyABEgKZdvD_BwE&gclsrc=aw.ds' },
    { name: 'Tom Ford Oud Wood', gender: 'unisex', description: 'A rich, woody fragrance with oud, spices, and vanilla.', image: 'img/Tom Ford Oud Wood.jpg', link: 'https://www.amazon.com/Tom-Ford-Private-Blend-Parfum/dp/B005NKIBXA/ref=asc_df_B005NKIBXA?mcid=298816e7f4523f5e9f08b9f6fcd7173d&tag=hyprod-20&linkCode=df0&hvadid=693425087232&hvpos=&hvnetw=g&hvrand=4287946578661936869&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-434119583671&psc=1' },
    { name: 'Creed Green Irish Tweed', gender: 'him', description: 'A fresh and green fragrance with notes of iris, sandalwood, and lemon.', image: 'img/Creed Green Irish Tweed.jpeg', link: 'https://www.fragrancenet.com/cologne/creed/creed-green-irish-tweed/eau-de-parfum?gclid=EAIaIQobChMIzPyqy9reiQMVx3N_AB0kGBpDEAQYASABEgLKKvD_BwE&mv_pc=gawus_pla_c_x_20379311721_298364&utm_campaign=x&utm_medium=cpc&utm_source=google_us#298364' },
    { name: 'Chloé Nomade', gender: 'her', description: 'A floral, woody fragrance with notes of oakmoss, freesia, and mirabelle plum.', image: 'img/Chloé Nomade.jpeg', link: 'https://www.fragrancenet.com/perfume/chloe/chloe-nomade/eau-de-parfum?gclid=EAIaIQobChMIgeisgdveiQMVIyvUAR3%2dUTpkEAQYBSABEgKI0_D_BwE&mv_pc=gawus_pla_c_x_20379311721_307448&utm_campaign=x&utm_medium=cpc&utm_source=google_us#307448' },
    { name: 'Le Labo Santal 33', gender: 'unisex', description: 'A smoky, woody fragrance with sandalwood, cedarwood, and cardamom.', image: 'img/santal 33.jpg', link: 'https://www.lelabofragrances.com/santal-33-147.html?source=shoppingads&region=US&locale=EN&size=50ml&srsltid=AfmBOopZ0uB2OiS1F3ldjIlhpNOaTCJKtCdSJMoZc1Grm5IyHad7nafpz7I' },
    { name: 'Maison Francis Kurkdjian Baccarat Rouge 540', gender: 'unisex', description: 'A luxurious fragrance with amber, saffron, and cedarwood notes.', image: 'img/Maison Francis.jpg', link: 'https://www.amazon.com/Baccarat-Maison-Frances-Kurkdjian-Perfume/dp/B074V34X4C/ref=asc_df_B074V34X4C?mcid=5df4e41d37813d828ded55c8a57a9934&tag=hyprod-20&linkCode=df0&hvadid=693031565430&hvpos=&hvnetw=g&hvrand=5668119485660080657&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-573686568412&psc=1' },
    { name: 'Versace Eros', gender: 'him', description: 'A vibrant and sensual fragrance with mint, vanilla, and tonka bean.', image: 'img/Versace Eros.jpg', link: 'https://www.amazon.com/VERSACE-Gianni-Versace-PARFUM-SPRAY/dp/B09HXZ84SJ/ref=asc_df_B09HXZ84SJ?mcid=94972e407f9a36c3aabfb55ca89c7baf&tag=hyprod-20&linkCode=df0&hvadid=693031565487&hvpos=&hvnetw=g&hvrand=14257697828964622315&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-1437845929139&psc=1' },
    { name: 'Mugler Alien', gender: 'her', description: 'An oriental, floral fragrance with jasmine, amber, and woodsy notes.', image: 'img/Mugler Alien.jpeg', link: 'https://www.macys.com/shop/product/alien-by-mugler-eau-de-parfum-fragrance-collection?gad_source=4&pla_country=US&m_ac=Google_Beauty_PLA&m_ag=Google_PLA_Beauty_Fragrance_Mugler&m_cn=GGL_PLA_Beauty_Fragrance&CAGPSPN=pla&m_sc=sem&gclid=EAIaIQobChMI5e38r93eiQMVrm5_AB3DNiliEAQYASABEgJ2RvD_BwE&m_sb=Google&m_pi=go_cmp-19742165753_adg-146045608949_ad-649484790460_pla-1984995432474_dev-c_ext-_prd-3439600056921USA&ID=237181&m_tp=PLA&trackingid=450x1055113082' },
    { name: 'Dior Homme Intense', gender: 'him', description: 'A sophisticated, woody fragrance with iris, amber, and leather.', image: 'img/Dior Homme Intense.jpeg', link: 'https://www.macys.com/shop/product/dior-homme-eau-de-toilette-fragrance-collection?gad_source=4&pla_country=US&m_ac=Google_Beauty_PLA&m_ag=Google_LIA_Beauty_Dior&m_cn=GGL_LIA_Beauty&CAGPSPN=pla&m_sc=sem&gclid=EAIaIQobChMI8JPi5d3eiQMVaaJaBR3sbxg4EAQYBCABEgLMlfD_BwE&m_sb=Google&m_pi=go_cmp-21088026232_adg-160369948935_ad-694051419248_pla-2283525834859_dev-c_ext-_prd-3348901419147USA&ID=10498044&m_tp=PLA&trackingid=450x1057769313' },
    { name: 'Starwalker Montblanc', gender: 'him', description: 'A fresh, woody fragrance with bamboo, citrus, and musk notes.', image: 'img/Starwalker Montblanc.jpeg', link: 'https://www.ebay.com/itm/390915559472?chn=ps&norover=1&mkevt=1&mkrid=711-166974-028196-7&mkcid=2&mkscid=101&itemid=390915559472&targetid=2324374844063&device=c&mktype=pla&googleloc=9195529&poi=&campaignid=19940654370&mkgroupid=164741475733&rlsatarget=pla-2324374844063&abcId=9311306&merchantid=118864164&geoid=9195529&gad_source=4&gclid=EAIaIQobChMI3deitN7eiQMVmZtaBR1pxA59EAQYASABEgJl9fD_BwE' },
    { name: 'Montblanc Legend', gender: 'him', description: 'A warm, woody fragrance with spices, lavender, and apple.', image: 'img/Montblanc Legend.jpeg', link: 'https://www.ebay.com/itm/302515284178?chn=ps&mkevt=1&mkcid=28&google_free_listing_action=view_item&srsltid=AfmBOoqSsLVrnlWIQjh2qD-4QoszLo_U0VDH6Eg3ZD7PTsVTzam_mwUWlnU' },
    { name: 'Dior Sauvage Elixir', gender: 'him', description: 'A warm, spicy fragrance with vanilla, amber, and chestnut.', image: 'img/Dior Sauvage Elixir.jpg', link: 'https://www.giftexpress.com/sauvage-elixir-christian-dior-gxp-12906.html?gad_source=4&gclid=EAIaIQobChMI0JK9yuDeiQMVsJ1aBR3srzQyEAQYBCABEgLHLfD_BwE' },
    { name: 'Giorgio Armani Stronger With You', gender: 'him', description: 'A sophisticated fragrance with lemon, tonka bean, and olive tree notes.', image: 'img/Giorgio Armani Stronger With You.jpeg', link: 'https://www.macys.com/shop/product/emporio-armani-mens-stronger-with-you-eau-de-toilette-fragrance-collection?gad_source=4&pla_country=US&m_ac=Google_Beauty_PLA&m_ag=Google_PLA_Beauty_GiorgioArmani&m_cn=GGL_PLA_Beauty&CAGPSPN=pla&m_sc=sem&gclid=EAIaIQobChMIwZCxjeHeiQMVCqJaBR0smTVpEAQYAiABEgI4xfD_BwE&m_sb=Google&m_pi=go_cmp-21077927976_adg-160369946855_ad-694051419053_pla-2286225509701_dev-c_ext-_prd-3605522040281USA&ID=18427518&m_tp=PLA&trackingid=450x1057768510' },
    { name: 'Club de Nuit Intense Man by Armaf', gender: 'him', description: 'A fresh, woody fragrance with lemon, black currant, and musk.', image: 'img/Club de Nuit.jpg', link: 'https://www.amazon.com/ARMAF-club-nuit-intense-Black/dp/B00M3IFUMK/ref=asc_df_B00M3IFUMK?mcid=5f77b1a91b5f378b936de1c76b89aa88&tag=hyprod-20&linkCode=df0&hvadid=693031565487&hvpos=&hvnetw=g&hvrand=9633938449420140015&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-405661268608&psc=1' },

    // Added Nautica Voyage and affordable Arabic perfumes
    { name: 'Nautica Voyage', gender: 'him', description: 'A fresh and aquatic fragrance with green apple, citrus, and musk.', image: 'img/Nautica Voyage.jpg', link: 'https://www.amazon.com/Nautica-Voyage-Eau-Toilette-Spray/dp/B000P22TIY/ref=asc_df_B000P22TIY?mcid=c93d5b3084953c5a8a369ea8e892abdb&tag=hyprod-20&linkCode=df0&hvadid=693031565487&hvpos=&hvnetw=g&hvrand=2405106176291408000&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-404902281280&psc=1' },

    // Affordable Arabic Fragrances
    { name: 'Ajmal Amber Wood', gender: 'unisex', description: 'A rich, woody fragrance with amber, vanilla, and oud notes.', image: 'img/Amber Wood.jpeg', link: 'https://www.ebay.com/itm/404888118133?chn=ps&norover=1&mkevt=1&mkrid=711-166974-028196-7&mkcid=2&mkscid=101&itemid=404888118133&targetid=2274951440814&device=c&mktype=pla&googleloc=9195529&poi=&campaignid=21266652902&mkgroupid=173398939588&rlsatarget=pla-2274951440814&abcId=9413572&merchantid=101705465&geoid=9195529&gad_source=4&gclid=EAIaIQobChMIgP_D3eLeiQMVba5aBR1RISTTEAQYBSABEgIsJPD_BwE' },
    { name: 'Lattafa Raghba', gender: 'unisex', description: 'An oriental fragrance with vanilla, musk, and oud notes.', image: 'img/Lattafa Raghba.jpg', link: 'https://www.amazon.com/Raghba-For-Men-by-lattafa/dp/B00JAJYDBO/ref=asc_df_B00JAJYDBO?mcid=336de580d18c3b7d8db8aa19c413911d&tag=hyprod-20&linkCode=df0&hvadid=693308329633&hvpos=&hvnetw=g&hvrand=16902139666391866818&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-407818233278&psc=1' },
    { name: 'Al Haramain Amber Oud', gender: 'unisex', description: 'A warm fragrance with amber, oud, and musk notes.', image: 'img/Al Haramain.jpg', link: 'https://www.amazon.com/Haramain-Amber-Oud-Gold-Parfum/dp/B07CGX34B2/ref=asc_df_B07CGX34B2?mcid=10b2a58024ba340d81e9948e85e0cb10&tag=hyprod-20&linkCode=df0&hvadid=693031565430&hvpos=&hvnetw=g&hvrand=17947175254351017917&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-570720500341&psc=1' },
    { name: 'Lattafa Asad', gender: 'unisex', description: 'A woody oriental fragrance with oud, musk, and amber.', image: 'img/Lattafa Asad.jpg', link: 'https://www.amazon.com/Lattafa-Perfumes-Unisex-Parfum-Spray/dp/B0B8TQ7YRW/ref=asc_df_B0B8TQ7YRW?mcid=daa6f139399f3067a00f7ca8bc5311aa&tag=hyprod-20&linkCode=df0&hvadid=693033556722&hvpos=&hvnetw=g&hvrand=10716712262253458372&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-1745633812200&psc=1' },
    { name: 'Ameer Al Oudh by Lattafa', gender: 'unisex', description: 'A deep, woody fragrance with oud, amber, and rose notes.', image: 'img/Ameer Al Oudh.jpg', link: 'https://www.amazon.com/Ameer-Al-Oud-Intense-Perfumes/dp/B08LS9QXZC/ref=asc_df_B08LS9QXZC?mcid=63e76ccbbfa733a6b9f8ee436c73f4c2&tag=hyprod-20&linkCode=df0&hvadid=696953415022&hvpos=&hvnetw=g&hvrand=14935175858497443472&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195529&hvtargid=pla-1131815257904&psc=1' },
    { name: 'Ard Al Zaafaran Shams Al Emarat', gender: 'unisex', description: 'A rich, floral fragrance with oud, rose, and saffron.', image: 'img/Ard Al Zaafaran.jpeg', link: 'https://www.ebay.com/itm/334476355958?chn=ps&_trkparms=ispr%3D1&amdata=enc%3A1Ga-wR2nkRsmnGHsoRN5AfA40&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&mkscid=101&itemid=334476355958&targetid=2319404999269&device=c&mktype=pla&googleloc=9195529&poi=&campaignid=21222256297&mkgroupid=167054596991&rlsatarget=aud-1314496317987:pla-2319404999269&abcId=9408285&merchantid=6296724&gad_source=4&gclid=EAIaIQobChMI7c7J1OTeiQMVmataBR2pHzcUEAQYAiABEgK-sfD_BwE' }
  ];

  let currentPage = 1;
  const fragrancesPerPage = 6;
  let filteredFragrances = fragrances;

  const fragranceList = document.getElementById('fragrance-list');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const searchBar = document.getElementById('search-bar');
  const filterAllBtn = document.getElementById('filter-all');
  const filterHimBtn = document.getElementById('filter-him');
  const filterHerBtn = document.getElementById('filter-her');
  const modeToggle = document.getElementById('mode-toggle');

  // Function to render fragrances
  function renderFragrances() {
    fragranceList.innerHTML = '';
    const startIndex = (currentPage - 1) * fragrancesPerPage;
    const selectedFragrances = filteredFragrances.slice(startIndex, startIndex + fragrancesPerPage);

    selectedFragrances.forEach(fragrance => {
      const card = document.createElement('div');
      card.classList.add('fragrance-card');
      card.innerHTML = `
        <img src="${fragrance.image}" alt="${fragrance.name}">
        <h3>${fragrance.name}</h3>
        <p class="description">${fragrance.description}</p>
        <a href="${fragrance.link}" class="buy-link" target="_blank">Buy Now</a>
      `;
      fragranceList.appendChild(card);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage * fragrancesPerPage >= filteredFragrances.length;
  }

  // Pagination controls
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderFragrances();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage * fragrancesPerPage < filteredFragrances.length) {
      currentPage++;
      renderFragrances();
    }
  });

  // Gender filter
  filterAllBtn.addEventListener('click', () => {
    filteredFragrances = fragrances;
    filterAllBtn.classList.add('active');
    filterHimBtn.classList.remove('active');
    filterHerBtn.classList.remove('active');
    currentPage = 1;
    renderFragrances();
  });

  filterHimBtn.addEventListener('click', () => {
    filteredFragrances = fragrances.filter(f => f.gender === 'him');
    filterHimBtn.classList.add('active');
    filterAllBtn.classList.remove('active');
    filterHerBtn.classList.remove('active');
    currentPage = 1;
    renderFragrances();
  });

  filterHerBtn.addEventListener('click', () => {
    filteredFragrances = fragrances.filter(f => f.gender === 'her');
    filterHerBtn.classList.add('active');
    filterAllBtn.classList.remove('active');
    filterHimBtn.classList.remove('active');
    currentPage = 1;
    renderFragrances();
  });

  // Search functionality
  searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();
    filteredFragrances = fragrances.filter(f => f.name.toLowerCase().includes(searchQuery));
    currentPage = 1;
    renderFragrances();
  });

  // Mode toggle
  modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.fragrance-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('.pagination-btn').forEach(btn => btn.classList.toggle('dark-mode'));
  });

  // Initial render
  renderFragrances();
});

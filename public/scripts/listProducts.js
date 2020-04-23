var products = [
    {
        name: 'XPLR SHOES ',
        price: 48,
        rating: 4.5,
        type: 'Athletics',
        gender: ['men'],
        color: 'white',
        img: '/images//Athletics/X_PLR_Shoes_Red_FX7246_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(212,19,38,1) 0%, rgba(85, 0, 11,1) 100%);'
    },

    {
        name: 'CRAZY BYW 2.0 PHARRELL',
        price: 90,
        rating: 5,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'yellow',
        img: '/images/Athletics/Crazy_BYW_2.0_Pharrell_Williams_Shoes_Yellow_FU7369_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(243, 173, 98,1) 0%, rgba(244,169,143,1) 100%);'
        

    },

    {
        name: 'NITE JOGGER SHOES',
        price: 50,
        rating: 3,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'brown',
        img: '/images/Athletics/Nite_Jogger_Shoes_White_DA8666_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(221,151,137,1) 0%, rgba(174,93,107,1) 100%);'
    },

    {
        name: 'NMD_R1 SHOES',
        price: 70,
        rating: 4,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'orange',
        img: '/images/Athletics/NMD_R1_Shoes_Orange_EF4267_01_standard.png',
        background: 'linear-gradient(318deg, rgba(255,107,92) 0%, rgba(255,82,75) 95%);'
    },

    {
        name: 'ULTRABOOST PB SHOES',
        price: 130,
        rating: 5,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'white',
        img: '/images/Athletics/Ultraboost PB SHOES.png',
        background: 'linear-gradient(318deg, rgba(67,67,69) 0%, rgba(0,0,0) 95%);'
    },

    {
        name: 'ULTRABOOST 20 SHOES',
        price: 90,
        rating: 4.7,
        type: 'Athletics',
        gender: ['women'],
        color: 'rose',
        img: '/images/Athletics/Ultraboost_20_Shoes_Pink_EG0725_01_standard.png',
        background: 'linear-gradient(318deg, rgba(204,181,183) 0%, rgba(255,138,150) 95%);'
    },

    {
        name: 'BAARA BOOTS',
        price: 190,
        rating: 4,
        type: 'Boots',
        gender: ['men'],
        color: 'brown',
        img: '/images/Boots/Baara_Boots_Brown_EE5531_01_standard.png',
        background: 'linear-gradient(318deg, rgba(64,64,66) 0%, rgba(13,65,52) 95%);'
    },

    {
        name: 'TERREX CHOLEAH PADDED',
        price: 170,
        rating: 3.8,
        type: 'Boots',
        gender: ['men'],
        color: 'black',
        img: '/images/Boots/Terrex_Choleah_Padded_Climaproof_Hiking_Shoes_Black_S80748_01_standard.png',
        background: 'linear-gradient(318deg, rgba(50,44,43) 0%, rgba(35,32,33) 95%);'
    },

    {
        name: 'TERREX FREE',
        price: 130,
        rating: 4,
        type: 'Sport shoe',
        gender: ['women'],
        color: 'brown',
        img: '/images/Boots/Terrex_Free_Hiker_Hiking_Shoes_Brown_G28416_01_standard.png',
        background: 'linear-gradient(318deg, rgba(0,0,0) 0%, rgba(83,34,81) 95%);'
    },

    {
        name: 'ADIZERO 8.0',
        price: 95,
        rating: 4.2,
        type: 'Cleats',
        gender: ['men'],
        color: 'white',
        img: '/images/Cleats/Adizero_8.0_Cleats_White_EE7452_01_standard.png',
        background: 'linear-gradient(318deg, rgba(244,84,30) 0%, rgba(184, 46, 0) 95%);'
    },

    {
        name: 'ADIZERO SK CLEATS',
        price: 95,
        rating: 4.5,
        type: 'Cleats',
        gender: ['men'],
        color: 'black',
        img: '/images/Cleats/Adizero_8.0_SK_Cleats_Black_D97643_01_standard.png',
        background: 'linear-gradient(318deg, rgba(19,19,19) 0%, rgba(59,48,60) 95%);'
    },

    {
        name: 'FREACK CARBON',
        price: 85,
        rating: 3.9,
        type: 'Cleats',
        gender: ['men'],
        color: 'black',
        img: '/images/Cleats/Freak_Carbon_Low_Cleats_Black_EE7202_01_standard.png',
        background: 'linear-gradient(318deg, rgba(50,44,43) 0%, rgba(35,32,33) 95%);'
    },

    {
        name: 'PREDATOR ARCHIVE',
        price: 100,
        rating: 4.7,
        type: 'Cleats',
        gender: ['men'],
        color: 'blue',
        img: '/images/Cleats/Predator_Archive_Shoes_Black_EH2942_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(0, 59, 80,1) 0%, rgba(0,116,159,1) 100%);'
    },

    {
        name: 'PREDATOR MUTATOR',
        price: 100,
        rating: 4.9,
        type: 'Cleats',
        gender: ['men'],
        color: 'blue',
        img: '/images/Cleats/Predator_Mutator_20+_Firm_Ground_Cleats_Blue_EG1512_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(32,47,83,1) 0%, rgba(15, 42, 88,1) 100%);'
        
    },

    {
        name: 'X19 FRIMGROUND',
        price: 120,
        rating: 5,
        type: 'Cleats',
        gender: ['men'],
        color: 'blue',
        img: '/images/Cleats/X_19+_Firm_Ground_Cleats_Blue_EG7137_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(51, 218, 233) 0%, rgba(23,51,105,1) 100%);'
    },

    {
        name: 'AMERICA HI SHOES',
        price: 75,
        rating: 4,
        type: 'Hightops',
        gender: ['men'],
        color: 'white',
        img: '/images/Hightops/Americana_Hi_Shoes_White_EF2803_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(168,34,50) 0%, rgba(85, 20, 25,1) 100%);'
    },

    {
        name: 'BASKET PROFI',
        price: 85,
        rating: 4.3,
        type: 'Hightops',
        gender: ['women'],
        color: 'orange',
        img: '/images/Hightops/Basket_Profi_Shoes_Yellow_FW3103_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(229,141,1) 0%, rgba(255, 157, 0,1) 100%);'
    },

    {
        name: 'ENTRAP MID',
        price: 80,
        rating: 4.1,
        type: 'Hightops',
        gender: ['men'],
        color: 'white',
        img: '/images/Hightops/Entrap_Mid_Shoes_White_EG4310_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(198,37,55,1) 0%, rgba(136, 21, 34,1) 100%);'
    },

    {
        name: 'PRO MODEL2G',
        price: 100,
        rating: 4.3,
        type: 'Hightops',
        gender: ['men'],
        color: 'blue',
        img: '/images/Hightops/Pro_Model_2G_Shoes_Blue_EF9820_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(0,60,162,1) 0%, rgba(0, 28, 77,1) 100%);'
    },

    {
        name: 'TOP TEN HISHOE',
        price: 100,
        rating: 4.3,
        type: 'Hightops',
        gender: ['men'],
        color: 'red',
        img: '/images/Hightops/Top_Ten_Hi_Shoes_Red_EF6368_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(202,43,51,1) 0%, rgba(122,1,16,1) 100%);'
    },

];

module.exports = products;
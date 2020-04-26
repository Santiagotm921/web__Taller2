var products = [
    {
        name: 'XPLR SHOES',
        price: 48,
        rating: 4.5,
        type: 'Athletics',
        gender: ['men'],
        color: 'white',
        img: '/images//Athletics/X_PLR_Shoes_Red_FX7246_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(212,19,38,1) 0%, rgba(85, 0, 11,1) 100%);',
        imgrating: '/images/src/4,5b.png',
        imgrating2: '/images/src/4,5.png',
        subtitle: 'AIRY MESH SNEAKERS WITH MODERN 3-STRIPES STYLE.',
        description: 'Follow the rhythm of the day in the adidas X_PLR Shoes. One moment youre at brunch, in the next youre out the door embracing your friends kooky plan born over that last coffee. Maybe it was yours. All that matters is you embrace it fully, and these sneakers help you do it in total comfort.'
    },

    {
        name: 'CRAZY BYW 2.0 PHARRELL',
        price: 90,
        rating: 5,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'yellow',
        img: '/images/Athletics/Crazy_BYW_2.0_Pharrell_Williams_Shoes_Yellow_FU7369_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(243, 173, 98,1) 0%, rgba(244,169,143,1) 100%);',
        imgrating: '/images/src/5b.png',
        imgrating2: '/images/src/5.png',
        subtitle: 'RETRO-STYLE HOOPS SHOES CO-CREATED WITH PHARRELL WILLIAMS.',
        description: 'Blend the blacktop and the street in style. These adidas basketball shoes update a retro hardwood look with Pharrell Williams creative designs. Midsole cushioning returns energy as you move from a pick-up game to whatever comes next that day.'
    },

    {
        name: 'NITE JOGGER SHOES',
        price: 50,
        rating: 3,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'brown',
        img: '/images/Athletics/Nite_Jogger_Shoes_White_DA8666_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(221,151,137,1) 0%, rgba(174,93,107,1) 100%);',
        imgrating: '/images/src/3b.png',
        imgrating2: '/images/src/3.png',
        subtitle: 'MODERN CUSHIONING UPDATES THIS FLASHY 80S STANDOUT',
        description: 'Inspired by the 1980 Nite Jogger, these shoes shine bright with retro style and reflective details. The mesh and nylon ripstop upper is detailed with suede overlays. An updated Boost midsole adds responsive cushioning.'
    },

    {
        name: 'NMD_R1 SHOES',
        price: 70,
        rating: 4,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'orange',
        img: '/images/Athletics/NMD_R1_Shoes_Orange_EF4267_01_standard.png',
        background: 'linear-gradient(318deg, rgba(255,107,92) 0%, rgba(255,82,75) 95%);',
        imgrating: '/images/src/4b.png',
        imgrating2: '/images/src/4.png',
        subtitle: 'ADIDAS SHOES THAT COMBINE RETRO LINES AND MODERN TECH',
        description: 'NMD takes adidas best running techs and puts them into a streetworthy trainer. These NMD shoes borrow style notes from retro pairs in the adidas archives. Contrast plugs in the midsole make an eye-catching statement.'
    },

    {
        name: 'ULTRABOOST PB SHOES',
        price: 130,
        rating: 5,
        type: 'Athletics',
        gender: ['men', 'women'],
        color: 'white',
        img: '/images/Athletics/Ultraboost PB SHOES.png',
        background: 'linear-gradient(318deg, rgba(67,67,69) 0%, rgba(0,0,0) 95%);',
        imgrating: '/images/src/5b.png',
        imgrating2: '/images/src/5.png',
        subtitle: 'FEATHERLIGHT SHOES MADE FOR FAST RUNS',
        description: 'Meet your new best friend for your fastest, longest runs. The sleek silhouette and responsive comfort of Ultraboost show up ready for race day and beyond. These Ultraboost PB Shoes have an upper built with the lightest mesh adidas makes. Internal support locks down the fit when you are powering toward the finish.'
    },

    {
        name: 'ULTRABOOST 20 SHOES',
        price: 90,
        rating: 4.7,
        type: 'Athletics',
        gender: ['women'],
        color: 'rose',
        img: '/images/Athletics/Ultraboost_20_Shoes_Pink_EG0725_01_standard.png',
        background: 'linear-gradient(318deg, rgba(204,181,183) 0%, rgba(255,138,150) 95%);',
        imgrating: '/images/src/4,7b.png',
        imgrating2: '/images/src/4,7.png',
        subtitle: 'HIGH-PERFORMANCE RUNNING SHOES WITH A PRECISE FIT',
        description: 'Confidence from the ground up. These adidas running shoes are designed to turbo charge your daily miles. The knit upper offers stitched-in support based on motion capture technology. A soft, comfortable elastane heel allows for natural movement of the Achilles. Responsive cushioning helps keep transitions smooth and the energy flowing.'
    },

    {
        name: 'BAARA BOOTS',
        price: 190,
        rating: 4,
        type: 'Boots',
        gender: ['men'],
        color: 'brown',
        img: '/images/Boots/Baara_Boots_Brown_EE5531_01_standard.png',
        background: 'linear-gradient(318deg, rgba(64,64,66) 0%, rgba(13,65,52) 95%);',
        imgrating: '/images/src/4b.png',
        imgrating2: '/images/src/4.png',
        subtitle: 'RUGGED BOOTS FOR RAINY SIDEWALKS.',
        description: 'Inspired by action sports, these rugged boots are built for winter weather. The coated leather upper has a water-repellent finish to help block out rain. Reflective details shine in low light. A hook-and-loop lacing system and XL heel and tongue pulls make them easy to put on and take off.'
    },

    {
        name: 'TERREX CHOLEAH PADDED',
        price: 170,
        rating: 3.8,
        type: 'Boots',
        gender: ['men, women'],
        color: 'black',
        img: '/images/Boots/Terrex_Choleah_Padded_Climaproof_Hiking_Shoes_Black_S80748_01_standard.png',
        background: 'linear-gradient(318deg, rgba(50,44,43) 0%, rgba(35,32,33) 95%);',
        imgrating: '/images/src/3,8b.png',
        imgrating2: '/images/src/3,8.png',
        subtitle: 'WARM BOOTS FOR SURE-FOOTED WINTER WEAR.',
        description: 'Designed for everyday comfort and cold-weather warmth, these womens boots feature Climaproof protection to keep your feet dry and PrimaLoft® insulation for maximum warmth. A high-traction rubber outsole maximizes footing on wet and dry surfaces, while a womens-specific design enhances the fit.'
    },

    {
        name: 'TERREX FREE',
        price: 130,
        rating: 4,
        type: 'Sport shoe',
        gender: ['women'],
        color: 'brown',
        img: '/images/Boots/Terrex_Free_Hiker_Hiking_Shoes_Brown_G28416_01_standard.png',
        background: 'linear-gradient(318deg, rgba(0,0,0) 0%, rgba(83,34,81) 95%);',
        imgrating: '/images/src/4b.png',
        imgrating2: '/images/src/4.png',
        subtitle: 'LIGHTWEIGHT SHOES BUILT FOR ULTRA-COMFORT ON LONG HIKES.',
        description: 'Hiking never felt better. Every ingredient in these shoes aims for comfort on long-distance hikes. The sock-like build and adidas Primeknit upper hug your foot for an adaptive, snug feel with every step. The Torsion bar provides a stable, controlled and natural flex of the midsole and foot.'
    },

    {
        name: 'ADIZERO 8.0',
        price: 95,
        rating: 4.2,
        type: 'Cleats',
        gender: ['men'],
        color: 'white',
        img: '/images/Cleats/Adizero_8.0_Cleats_White_EE7452_01_standard.png',
        background: 'linear-gradient(318deg, rgba(244,84,30) 0%, rgba(184, 46, 0) 95%);',
        imgrating: '/images/src/4,2b.png',
        imgrating2: '/images/src/4,2.png',
        subtitle: 'LIGHTWEIGHT CLEATS DESIGNED FOR SPEED AND STABILITY.',
        description: 'Showcase your playmaking speed in these football cleats. Designed for easy on and off, they feature a textile upper with sock-like construction for lightweight stability and lockdown as you create havoc at the line of scrimmage.'
    },

    {
        name: 'ADIZERO SK CLEATS',
        price: 95,
        rating: 4.5,
        type: 'Cleats',
        gender: ['men'],
        color: 'black',
        img: '/images/Cleats/Adizero_8.0_SK_Cleats_Black_D97643_01_standard.png',
        background: 'linear-gradient(318deg, rgba(19,19,19) 0%, rgba(59,48,60) 95%);',
        imgrating: '/images/src/4,5b.png',
        imgrating2: '/images/src/4,5.png',
        subtitle: 'LIGHTWEIGHT CLEATS DESIGNED WITH ANKLE SUPPORT.',
        description: 'Dominate the trenches in style in these football cleats. Designed for easy on and off, the mid-cut cleats feature a sock-like construction for the lightweight stability and ankle support you need to beat your opponent off the line. The cleated outsole provides superior traction.'
    },

    {
        name: 'FREAK CARBON',
        price: 85,
        rating: 3.9,
        type: 'Cleats',
        gender: ['men'],
        color: 'black',
        img: '/images/Cleats/Freak_Carbon_Low_Cleats_Black_EE7202_01_standard.png',
        background: 'linear-gradient(318deg, rgba(50,44,43) 0%, rgba(35,32,33) 95%);',
        imgrating: '/images/src/3,8b.png',
        imgrating2: '/images/src/3,8.png',
        subtitle: 'LIGHTWEIGHT CLEATS BUILT FOR AGILITY AND SPEED.',
        description: 'Change games with speed and style in these football cleats. Designed for easy entry, the low-cut cleats feature a textile upper for enhanced agility and support in the open field.'
    },

    {
        name: 'PREDATOR ARCHIVE',
        price: 100,
        rating: 4.7,
        type: 'Cleats',
        gender: ['men'],
        color: 'blue',
        img: '/images/Cleats/Predator_Archive_Shoes_Black_EH2942_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(0, 59, 80,1) 0%, rgba(0,116,159,1) 100%);',
        imgrating: '/images/src/4,7b.png',
        imgrating2: '/images/src/4,7.png',
        subtitle: 'LIMITED-COLLECTION SHOES WITH A SPLIT PERSONALITY.',
        description: 'Step into 25 years of control. These adidas soccer shoes came to life after a simple request: Pick your top Predators. A ferocious-looking fusion of classic Preds with a dash of modern style, these limited-edition Predator Archive Shoes'
    },

    {
        name: 'PREDATOR MUTATOR',
        price: 100,
        rating: 4.9,
        type: 'Cleats',
        gender: ['men'],
        color: 'blue',
        img: '/images/Cleats/Predator_Mutator_20+_Firm_Ground_Cleats_Blue_EG1512_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(32,47,83,1) 0%, rgba(15, 42, 88,1) 100%);',
        imgrating: '/images/src/4,9b.png',
        imgrating2: '/images/src/4,9.png',
        subtitle: 'LACELESS CLEATS FOR UNRIVALED CONTROL ON FIRM GROUND.',
        description: 'Youre not cheating the system. Youre just bending the rules. Find your unfair advantage and transform your game with the all-new adidas Predator. The knit textile upper on these laceless soccer cleats wraps around your foot for a true 360-degree fit'

    },

    {
        name: 'X19 FRIMGROUND',
        price: 120,
        rating: 5,
        type: 'Cleats',
        gender: ['men'],
        color: 'blue',
        img: '/images/Cleats/X_19+_Firm_Ground_Cleats_Blue_EG7137_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(51, 218, 233) 0%, rgba(23,51,105,1) 100%);',
        imgrating: '/images/src/5b.png',
        imgrating2: '/images/src/5.png',
        subtitle: 'LACELESS CLEATS FOR BULLET SPEED ON FIRM GROUND.',
        description: 'Fast doesnt count the seconds. It just chalks up the wins. Speed is hot-wired into your DNA. Supercharge your game in these adidas X 19+ Firm Ground Cleats.'
    },

    {
        name: 'AMERICANA HI SHOES',
        price: 75,
        rating: 4,
        type: 'Hightops',
        gender: ['men'],
        color: 'white',
        img: '/images/Hightops/Americana_Hi_Shoes_White_EF2803_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(168,34,50) 0%, rgba(85, 20, 25,1) 100%);',
        imgrating: '/images/src/4b.png',
        imgrating2: '/images/src/4.png',
        subtitle: 'RETRO LOOK THAT HONORS THE LEGENDARY AMERICANA B-BALL SHOE.',
        description: 'These streetwear shoes recall the look of the Americana, a legendary B-ball crusader from the 70s and 80s. The leather and textile upper gives a soft, supple feel. Theyre built for comfort with a padded collar and rubber cupsole.'
    },

    {
        name: 'BASKET PROFI',
        price: 85,
        rating: 4.3,
        type: 'Hightops',
        gender: ['women'],
        color: 'orange',
        img: '/images/Hightops/Basket_Profi_Shoes_Yellow_FW3103_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(229,141,1) 0%, rgba(255, 157, 0,1) 100%);',
        imgrating: '/images/src/4,2b.png',
        imgrating2: '/images/src/4,2.png',
        subtitle: 'OLD-SCHOOL B-BALL STYLE RETURNS.',
        description: 'Bringing back the era of tall socks and short shorts. Born in 1969 and relaunched in 2012, the adidas Basket Profi makes a triumphant comeback. This version of the mid-cut shoes channels 70s basketball style with a suede upper and retro rubber outsole.'
    },

    {
        name: 'ENTRAP MID',
        price: 80,
        rating: 4.1,
        type: 'Hightops',
        gender: ['men'],
        color: 'white',
        img: '/images/Hightops/Entrap_Mid_Shoes_White_EG4310_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(198,37,55,1) 0%, rgba(136, 21, 34,1) 100%);',
        imgrating: '/images/src/4b.png',
        imgrating2: '/images/src/4.png',
        subtitle: 'HARDWOOD-INSPIRED SHOES WITH RETRO STYLE.',
        description: 'Why long for something in the past when you can have it in the present? Experimenting with hardwood DNA, the adidas Entrap Mid Shoes take care of any nostalgia you might feel for retro styles. Modern cushioning keeps you comfortable on todays streets. Be inspired by the past but live for the present.'
    },

    {
        name: 'PRO MODEL2G',
        price: 100,
        rating: 4.3,
        type: 'Hightops',
        gender: ['men'],
        color: 'blue',
        img: '/images/Hightops/Pro_Model_2G_Shoes_Blue_EF9820_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(0,60,162,1) 0%, rgba(0, 28, 77,1) 100%);',
        imgrating: '/images/src/4,2b.png',
        imgrating2: '/images/src/4,2.png',
        subtitle: 'CUSHIONED BASKETBALL SHOES WITH LEGENDARY DETAILING.',
        description: 'Look and play like the legends of the hardwood. These basketball shoes have lightweight cushioning in the midsole so you can drive and slash in comfort. A shiny patent leather upper and a classic shell toe are a nod to classic adidas basketball style.'
    },

    {
        name: 'TOP TEN HISHOE',
        price: 100,
        rating: 4.3,
        type: 'Hightops',
        gender: ['men'],
        color: 'red',
        img: '/images/Hightops/Top_Ten_Hi_Shoes_Red_EF6368_01_standard.png',
        background: 'radial-gradient(ellipse at center, rgba(202,43,51,1) 0%, rgba(122,1,16,1) 100%);',
        imgrating: '/images/src/4,2b.png',
        imgrating2: '/images/src/4,2.png',
        subtitle: 'ICONIC BASKETBALL SHOES REFRESHED FOR TODAYS STREETS.',
        description: 'A legend of the hardwood, the adidas Top Ten was once reserved for the leagues top ten players. Today, theyre a street style icon. The shoes are detailed with a suede toe cap and satin-wrapped ankle collar. Classic collegiate colors keep the authentic heritage going strong.'
    },

];

module.exports = products;
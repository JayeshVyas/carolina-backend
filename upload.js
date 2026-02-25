import ImageKit from "imagekit";


const API_URL = "http://localhost:6387/api/blog";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OWRlYzE2YTgzNDQxNzU0MWZhYzM5ZiIsImlhdCI6MTc3MjA0OTc5MSwiZXhwIjoxNzcyNjU0NTkxfQ.2iCYVbqmhacCsZ_9orSmG1WGyYXQtI3l2DA4p8nkQkI";

const blogs = [
  {
    isMain: true,
    isSubMain: false,
    title: "Carolina Carports Expands Metal Building Customization Options",
    subheading:
      "Carolina Carports, a leading manufacturer of metal buildings, carports, and garages, continues to revolutionize the metal building industry with new product releases and customization options.",
    date: "Dec 10, 2024",
    meta: "",
    imageSrc:
      "https://ik.imagekit.io/cciimagestore/blog%201/New-Product-Accesories-For-Metal-Buildings-1.png?updatedAt=1761035146420",
    imageAlt: "Carolina Carports New Black Windows in 30x30 and 30x36",
    contentMarkdown:
      'Carolina Carports, a leading manufacturer of metal buildings, carports, and garages, continues to revolutionize the metal building industry with our latest product releases. These new additions to our metal building customization options demonstrate why **Carolina Carports** remains the trusted choice for custom metal buildings, metal garages, and any commercial or residential metal building across our [service areas](/our-service-area).\n\n---\n\n## **Carolina Carports New Black Metal Building Windows**\n\n![Black windows](https://ik.imagekit.io/cciimagestore/blog%201/Slide-3-1-1-300x300.png?updatedAt=1761035145518)\n\nCarolina Carports\' latest innovation in metal building design introduces premium **black-framed windows**. The introduction of new black-framed windows marks a significant addition to Carolina Carports metal building customization options. Available in two sizes for all metal building styles:\n\n- 30"x30" Black Metal Building Windows ($250) – Perfect for standard metal garages\n- 30"x36" Black Metal Building Windows ($275) – Ideal for larger metal workshops\n\nThese custom black metal building windows enhance any Carolina Carports structure—from metal storage buildings to commercial metal workshops—providing the perfect combination of natural light and ventilation that metal building owners demand.\n\n---\n\n## **Carolina Carports Premium Black Garage Doors for Metal Buildings**\n\n![Black garage door](https://ik.imagekit.io/cciimagestore/blog%201/Slide-4-1-1-300x300.png?updatedAt=1761035145528)\n\nResponding to growing market demand for contemporary design elements in metal buildings, Carolina Carports now offers **black garage doors** specifically designed for their metal buildings. These aren\'t standard garage doors; they\'re **engineered exclusively for Carolina Carports products** with features including:\n\n- Certified and non-certified options for all metal building applications\n- Customizable sizes up to 16’ wide for any Carolina Carports metal building project\n- Available across all service areas\n\nThese new black garage doors maintain Carolina Carports\' **colored garage door pricing** structure that can be found on our pricing brochures, making them an accessible upgrade for any metal garage or workshop project.\n\n---\n\n## **6 Panel Steel Door For Metal Buildings**\n\n![6 panel steel door](https://ik.imagekit.io/cciimagestore/blog%201/Slide-2-2-1-300x300.png?updatedAt=1761035136480)\n\nThe new **6-paneled walk-in door** is a great upgrade, adding more style and better function to our metal buildings. **Priced at $800**, this **36"x80"** door combines commercial-grade durability with residential aesthetic appeal. Key features include:\n\n- Made out of high-quality materials such as aluminum and galvanized steel\n- Right-hinge configuration with outward swing\n- Professional 6-panel design that elevates the overall building appearance\n\nThis walk-in door is designed to work seamlessly with Carolina Carports\' metal garages, workshops, and storage buildings—offering reliable and stylish entry for any purpose.\n\n---\n\n## **Tips for Customizing Your Metal Building**\n\n1. **Consider your building’s purpose** – Whether it’s for storage, a workshop, or a garage, tailoring your building features (like windows or doors) to your needs will enhance functionality.\n2. **Think about natural light** – Adding windows like our black-framed options can improve the interior environment, reduce energy costs, and create a welcoming atmosphere.\n3. **Plan for future expansions** – Consider leaving room for growth, such as larger doors or additional spaces, if you think you’ll need more space down the road.\n4. **Check local building codes** – Ensuring that your building meets local regulations will save time and money during installation.\n\n---\n\n## **Why Choose Carolina Carports?**\n\nAt Carolina Carports, our dedication to quality goes beyond our exceptional range of products. We are committed to providing you with an experience that ensures your satisfaction from start to finish. When you choose Carolina Carports, you’re not just investing in a structure—you’re investing in **reliability, value, and peace of mind**. Every Carolina Carports structure is backed by:\n\n- **Industry-leading warranties**\n- **Professional installation**\n- **Comprehensive customer support** throughout your project\n- **Structures built to meet local building codes and regulations**\n\n**[Request a quote today](https://www.carolinacarportsinc.com/contact-us)** and experience why Carolina Carports remains the industry leader in metal building solutions.\n\n---\n\n## **Contact Carolina Carports for Your Metal Building Needs**\n\nFor more detailed information about these new products or to place an order on a building, customers can contact us directly at **1-800-670-4262** or visit our website at **www.carolinacarportsinc.com**. Our team of metal building experts can provide detailed guidance on product selection, installation requirements, and customization options to meet specific project needs.',
    _id: "carolina-carports-expands-metal-building-customization-options",
    createdAt: "2025-11-05T18:39:35.091Z",
    updatedAt: "2025-11-05T18:39:35.091Z",
    __v: 0,
  },
  {
    _id: "10-new-garage-door-colors-to-enhance-your-carolina-carports-building",
    isSubMain: true,
    title:
      "10 New Garage Door Colors to Enhance Your Carolina Carports Building",
    subheading:
      "Carolina Carports introduces 10 exclusive new garage door colors, expanding customization options so you can match your doors with your building, style, and personality.",
    date: "Nov 22, 2024",
    meta: "",
    imageSrc:
      "https://ik.imagekit.io/cciimagestore/blog%202/Slide-1-1.png?updatedAt=1761037991346",
    imageAlt: "Carolina Carports 10 new garage door colors",
    contentMarkdown:
      "Carolina Carports is proud to introduce our **10 exclusive new garage door colors**, taking customization to the next level for your metal building! Whether you're designing a [workshop](https://www.carolinacarportsinc.com/certified-triples/vertical-roof-style/fully-enclosed), [storage shed](https://www.carolinacarportsinc.com/certified-standards/vertical-roof-style/fully-enclosed), or [garage](https://www.carolinacarportsinc.com/certified-standards/vertical-roof-style/open), the new color lineup gives you the freedom to match your doors with your building, style, and personality.\n\n---\n\n## **The New Color Lineup**\n\nWe’ve added **10 stunning colors** to our garage door options, giving you a total of **16 choices** to perfectly complement your building. The new colors include:\n\n- **Black**  \n  ![Black Garage Door From Carolina Carports](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Black.1698-NEW-1-300x273.png)\n- **Cardinal Red**  \n  ![Red Garage Door From Carolina Carports](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Cardinal_Red.1659-NEW-300x275.png)\n- **King Blue**  \n  ![King Blue Garage Door From Carolina Carports](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/King-Blue.114-NEW-300x258.png)\n- **Tan**  \n  ![Tan Garage Door From Carolina Carports](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Tan.1658-NEW-300x275.png)\n- **Vintage Burgundy**  \n  ![Vintage Burgundy Garage Door](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/V_Burgundy.1660-NEW-300x275.png)\n- **Sandstone**  \n  ![Sandstone Garage Door](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Sandstone.1697-NEW-300x273.png)\n- **Quaker Gray**  \n  ![Quaker Gray Garage Door](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Quaker_Gray-NEW-300x258.png)\n- **Clay**  \n  ![Clay Garage Door](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Clay-NEW-300x258.png)\n- **True Burgundy**  \n  ![True Burgundy Garage Door](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/T.Burgundy.1661-NEW-300x275.png)\n- **Slate Blue**  \n  ![Slate Blue Garage Door](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/11/Slate_Blue.1664-NEW-300x275.png)\n\nThese colors have been carefully selected to add **versatility, elegance, and flair** to any of our metal buildings. Whether you’re looking for a bold accent like **Cardinal Red** or a timeless neutral such as **Sandstone**, you’ll find the perfect fit.\n\n---\n\n## **Certified and Uncertified Options for Your Needs**\n\nWe understand different customers have different preferences, so we’re offering these colors in two durable material options:\n\n1. **Uncertified:** 29-gauge panels — perfect for standard applications.\n2. **Certified:** 26-gauge panels — ideal for additional strength and durability.\n\nNo matter your choice, you’ll receive a **high-quality garage door** that stands up to the elements while enhancing the look of your Carolina Carports structure.\n\n---\n\n## **Pricing and Availability**\n\n1. **Black** garage door is included in our **standard color pricing** listed in the [brochure](https://www.carolinacarportsinc.com/brochures).\n2. The remaining new colors (all other **9 options**) are priced at **colored door pricing + $200.00** — see the [brochure](https://www.carolinacarportsinc.com/brochures).\n3. Available in **all service areas** so you can customize regardless of location: [view service areas](https://www.carolinacarportsinc.com/our-service-area).\n\nWith **16 colors** in total to choose from, you can seamlessly match your garage door to your metal building or mix and match for a bold contrast.\n\n---\n\n## **Benefits of the New Garage Door Colors**\n\n1. **Personalization Made Simple:** Achieve a modern, rustic, or industrial look with ease.\n2. **Improved Aesthetic Appeal:** A cohesive color scheme enhances curb appeal.\n3. **Versatility for Any Purpose:** Great for storage units, garages, hobby spaces, and agricultural structures.\n\n---\n\n## **Why Carolina Carports?**\n\n**Carolina Carports** is more than just a name — it’s a promise of **quality** and **customization**. When you purchase a metal building from us, you’re investing in a structure that’s tailored to your needs and designed to last. Adding these **10 new garage door colors** is another way we ensure you have the best options on the market.\n\n---\n\n## **Match Your Building with Ease**\n\nWith **16 garage door colors** to choose from, coordinate every detail of your metal building. Quick pairing ideas:\n\n1. **Barn Red buildings?** Pair with **Quaker Gray** for a sophisticated touch.\n2. **Evergreen buildings?** Try **Tan** or **Clay** for a fresh, natural look.\n3. **Pebble Beige structures?** Elevate with a standout **King Blue** door.\n4. Want a sleek, modern vibe? Pair a **Black** door with a **Pewter Gray** building.\n\n---\n\n**Ready to upgrade your metal building with one of these striking new garage door colors?**  \n**Contact us at 1-800-670-4262** or **visit our website at [www.carolinacarportsinc.com](http://www.carolinacarportsinc.com)** to start designing your dream building today!",
  },
  {
    isMain: false,
    title:
      "Connor Zilisch Unveils New NASCAR Xfinity Paint Scheme with Carolina Carports for Watkins Glen International Debut",
    subheading:
      "Carolina Carports and JR Motorsports revealed the new paint scheme for Connor Zilisch’s #88 NASCAR Xfinity Series car ahead of his 2024 debut.",
    date: "Aug 21, 2024",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/08/Untitled-design-1.jpg",
    imageAlt:
      "Nascar Vehicle showcasing the reveal of Connor Zilisch’s NASCAR Xfinity Series paint scheme with Carolina Carports at Watkins Glen International",
    contentMarkdown:
      "On **August 20th**, **Carolina Carports**, in collaboration with **JR Motorsports**, proudly unveiled the new paint scheme for **Connor Zilisch’s #88 NASCAR Xfinity Series** car. This announcement marks a significant moment as Zilisch prepares for his debut in the NASCAR Xfinity Series with JR Motorsports for the 2024 season.\n\nThe eye-catching design prominently features **Carolina Carports** as the primary sponsor, reflecting the strong and dynamic partnership between our company and JR Motorsports. As a leading provider of high-quality metal buildings, Carolina Carports is excited to support Connor Zilisch in this new chapter of his racing career.\n\nThe released video showcases the full paint scheme, highlighting the innovative design and Carolina Carports branding. We encourage you to watch the reveal for a detailed look at the vibrant scheme set to make its debut at **Watkins Glen International**.\n\n**Race Day:** *September 14th, 3:00 PM* — broadcast live on **USA Network** and **Motor Racing Network (MRN)**.\n\n**Watch the reveal:** [Carolina Carports × Connor Zilisch — Paint Scheme Reveal](https://www.youtube.com/shorts/XJwe-VF9O8U)\n",
    _id: "connor-zilisch-unveils-new-nascar-xfinity-paint-scheme-with-carolina-carports-for-watkins-glen-international-debut",
  },
  {
    isMain: false,
    title:
      "Carolina Carports Renews Long Term NASCAR Xfinity Series Partnership with JR Motorsports Through 2025",
    subheading:
      "JR Motorsports and Carolina Carports extend their partnership with a multi-year agreement beginning in 2025, including primary sponsorship for five NXS events.",
    date: "Aug 20, 2024",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/08/IMG_2932.png",
    imageAlt:
      "Nascar Xfinity Series race cars driven by Sam Mayer and Justin Allgaier with 'Re-Signed' highlighted to mark the renewed partnership for Carolina Carports and Jr Motorsports",
    contentMarkdown:
      "**MOORESVILLE, N.C. (Aug. 20, 2024)** – JR Motorsports announced today that **Carolina Carports**, an industry innovator in the manufacturing and installation of quality residential and commercial steel buildings, will return to the organization as a **primary partner in the NASCAR Xfinity Series** in a multi-year agreement beginning in **2025**.\n\n“**It’s really special for us to continue this partnership with Adela and everyone at Carolina Carports,**” said JR Motorsports CEO **Kelley Earnhardt Miller**. “It’s significant when we have partners see the value in our team and want that relationship to continue. I can’t wait to see how this partnership expands in 2025.”\n\nHeadquartered in **Dobson, N.C.**, Carolina Carports will be featured as the **primary partner for five NXS events in 2025**, including **three with Connor Zilisch** and the **No. 88 Chevrolet**. The two additional primary events will be announced at a later date.\n\nCarolina Carports’ **customer-first** and **quality-commitment** approach has made them a leader in the **steel-buildings** industry. Family-owned and operated since **1997**, Carolina Carports offers a wide selection of **steel buildings, metal carports, garages and barns** for personal or commercial use, all of which include American manufacturing, installation and customer support. The company’s footprint has expanded to **seven divisions** covering **North Carolina, Georgia, Texas, Missouri, Mississippi, Pennsylvania** and **Indiana**.\n\n“**Carolina Carports is proud to announce our continued partnership with the JRM team in 2025,**” says CCI owner and CEO, **Adela Herrera**. “Our companies align in many ways, we both share the values of teamwork and looking after team members like family. We look forward to another successful racing season.”\n\nIn addition to the extension into 2025 and beyond, Carolina Carports will be featured as the **primary partner for Zilisch’s first career NXS start** later this season on the road course at **Watkins Glen International** behind the wheel of the **No. 88 Chevrolet**.\n\n**Race info:** Zilisch and the No. 88 Carolina Carports Chevrolet will take the twists and turns of **Watkins Glen** on **Saturday, Sept. 14 at 3 p.m. ET** on **USA**, **MRN** and **SiriusXM NASCAR Radio Channel 90**.\n\n---\n\n### ABOUT CAROLINA CARPORTS\nCarolina Carports, Inc. was founded in **1997**. Our primary focus is to provide the highest quality residential and commercial metal structures at the most economical price to our customers. We use the latest in technology, machinery and engineering to ensure that each unit is above industry standards. Our commitment to each customer experience from start to finish is a driving force behind the growth of CCI. With **7 divisions** strategically located throughout the United States, CCI has become the single largest metal building manufacturer in the nation. We appreciate each of our dealers, employees, contractors and customers who are part of the CCI family. To start your next building project, contact us at **800-670-4262** or email us at **cci@carolinacarports.com**.\n\n### ABOUT JR MOTORSPORTS\nJR Motorsports is the racing operation co-owned by NASCAR Hall of Fame member and 15-time Most Popular Driver **Dale Earnhardt Jr.**, **Kelley Earnhardt Miller** and NASCAR Hall of Famer **Rick Hendrick**. Now in its **23rd year** of overall competition, JR Motorsports competes in multiple divisions, including the NASCAR Xfinity Series where it currently fields four full-time teams and earned championships in **2014, 2017 and 2018**. The company also owns seven titles in regional Late Model divisions with consecutive championships in **2022-23** and a prized national title in **2020**.",
    _id: "carolina-carports-renews-long-term-nascar-xfinity-series-partnership-with-jr-motorsports-through-2025",
  },
  {
    isMain: false,
    title:
      "Allgaier Drives Carolina Carports Chevrolet to Second at Pocono After Pit-Road Penalty",
    subheading:
      "After a pit-road penalty, Justin Allgaier stormed back to finish P2 at Pocono in the No. 7 Carolina Carports Chevrolet, leading a race-high 30 laps and keeping momentum in the NXS standings.",
    date: "Jul 15, 2024",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/07/450915299_908358677764272_6654768725132215202_n-1.jpg",
    imageAlt: "Carolina Carports #7 Justin Allgaier leading at Pocono Raceway",
    contentMarkdown:
      "Justin Allgaier, driver of the **No. 7 Carolina Carports Chevrolet**, demonstrated remarkable resilience and skill during Saturday afternoon's **NASCAR Xfinity Series** race at **Pocono Raceway**. After dominating **Stage One**, Allgaier faced a challenging **pit-road penalty** but managed to fight his way back to a strong **second-place finish**.\n\nAllgaier led a **race-high 30 laps**, securing a podium spot and maintaining **second place in the championship standings**. He now trails series leader **Cole Custer by 51 points** as the NXS moves to **Indianapolis Motor Speedway** next week.\n\nWith today’s podium finish, Allgaier has placed **ninth or better in seven of the last nine** NXS events, dating back to his **victory at Darlington Raceway in May**—a testament to the team’s consistency and pace.\n\n> “This group again showed how we never give up. We had such an unbelievably fast Carolina Carports Chevrolet today, and I just hate that we had that penalty that made us adjust our game plan. Despite that, Jim (Pohlman, crew chief) called a great race and helped get us in a position where we could get back up front and fight for the win in the end. Although it's not the finish that we were all hoping for, we will take this second and get ready to get after it in Indy on the oval next week. I've always loved racing there, and hopefully, we can be that one spot better.”\n\n---\n\n**Next up:** Indianapolis Motor Speedway — momentum in hand and eyes on the top step.",
    _id: "allgaier-drives-carolina-carports-chevrolet-to-second-at-pocono-after-pit-road-penalty",
  },
  {
    isMain: false,
    title:
      "Carolina Carports Partners with JR Motorsports and Justin Allgaier for Pocono Race on July 13th, Featuring Custom Paint Scheme Honoring Top Representatives",
    subheading:
      "Carolina Carports teams up with JR Motorsports and Justin Allgaier for the Pocono race, unveiling a special paint scheme featuring the names of their top representatives.",
    date: "Jun 18, 2024",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/06/IMG_1231-min.png",
    imageAlt:
      "Carolina Carports paint scheme for Pocono Raceway driven by Justin Allgaier from JR Motorsports",
    contentMarkdown:
      "Carolina Carports is thrilled to announce our exciting **partnership with JR Motorsports and Justin Allgaier** in the **#7 car** for the upcoming **NASCAR Xfinity Series** race at **Pocono Raceway on July 13th**!\n\nAs part of this collaboration, our **custom paint scheme** for the #7 car will proudly feature the names of our **top representatives** who embody dedication and excellence in delivering Carolina Carports quality:\n\n### Honored Representatives:\n- [Alan's Factory Outlet](https://alansfactoryoutlet.com/)\n- [Viking Steel Structures](https://www.vikingsteelstructures.com/)\n- [Bulldog Steel Structures Inc.](https://bulldogsteelstructures.com/)\n- [Prestige Steel Structures](https://prestigesteelstructures.com/)\n- [American Steel Buildings USA](https://americansteelbuildingsllc.com/)\n- [Garage and Shed Supply](https://www.garageandshedsupply.com/)\n- [Millennium Buildings](https://millenniumbuildings.com/?srsltid=AfmBOoqgMwF5GBrftEB-Zs0uoJ6qhLc80PG3SabhJTuQQpg6U7OxzNAA)\n- [Choice Metal Buildings](https://www.choicemetalbuildings.com/)\n- [Garage Buildings](https://garagebuildings.com/)\n- [Mayberry Metal Structures](http://www.usmetalgarages.com/)\n\nThese partners represent the **pinnacle of our industry**, ensuring every Carolina Carports structure exceeds expectations in **quality, durability, and customer satisfaction**. Their names on our race car symbolize our shared **commitment to excellence on and off the track**.\n\nJoin us as we prepare to **hit the Pocono Raceway** with our partners' names proudly displayed, showcasing their contributions to our success. Stay tuned for updates and **behind-the-scenes action** as we gear up for an exhilarating race day!",
    _id: "carolina-carports-partners-with-jr-motorsports-and-justin-allgaier-for-pocono-race-on-july-13th-featuring-custom-paint-scheme-honoring-top-representatives",
  },
  {
    isMain: false,
    title: "Carolina Carports Partners with NASCAR JRM and Sam Mayer",
    subheading:
      "Carolina Carports joins forces with JR Motorsports and Sam Mayer for three 2024 NASCAR Xfinity Series races, featuring the No. 1 Carolina Carports Chevrolet at Daytona, Texas, and Bristol.",
    date: "Feb 02, 2024",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/01/nascars-sam-mayer-JRM-and-Carolina-carports-Inc.jpg",
    imageAlt: "nascars-sam-mayer-jrm-and-carolina-carports-inc",
    contentMarkdown:
      "### Mayer to Drive No. 1 Carolina Carports Chevy at Daytona, Texas, and Bristol\n\n**MOORESVILLE, N.C. (Jan 31, 2024)** – Carolina Carports, an **industry innovator** in the manufacturing and installation of quality **residential and commercial steel buildings**, will join **JR Motorsports** as a **primary partner** for **Sam Mayer** and the **No. 1 team** in three **NASCAR Xfinity Series** events in 2024.\n\nMayer will drive the **No. 1 Carolina Carports Chevrolet** in the season opener at **Daytona International Speedway (Feb. 17)**, **Texas Motor Speedway (April 13)**, and **Bristol Motor Speedway (Sept. 20)**. The brand will also be featured as an **associate partner** in the remaining **30 races** of the season.\n\nHeadquartered in **Dobson, N.C.**, Carolina Carports’ **customer-first and quality-commitment** approach has made them a **leader in the steel-buildings industry**. Family-owned and operated since **1997**, Carolina Carports offers a wide selection of **steel buildings, metal carports, garages, and barns** for personal or commercial use — all backed by American manufacturing, installation, and customer support. The company’s footprint now spans **seven divisions** across **North Carolina, Georgia, Texas, Missouri, Mississippi, Pennsylvania,** and **Indiana**.\n\n![JRM Meeting](https://carolinacarportsinc.com/wordpress/wp-content/uploads/2024/01/JRM-Meeting.jpg)\n\n> “Carolina Carports is a family business much like our own,” said **JR Motorsports CEO Kelley Earnhardt Miller**. “Meeting Adela (Herrera) and her team, it’s clear she has built her company on quality and excellence, and that makes Carolina Carports a great fit for Sam and the No. 1 team.”\n\n**Sam Mayer**, a 20-year-old native of **Franklin, Wisconsin**, enters 2024 on the heels of a **career-best season** with **four wins** and a **third-place finish** in the NXS championship.\n\n> “Carolina Carports is pleased to announce our new partnership with the JRM team,” said **Adela Herrera**, Carolina Carports Owner and CEO. “With over 25 years leading in the metal building industry, we've consistently provided top-quality materials throughout our seven division locations. Teaming up with one of the great names in racing is a testament to our commitment to excellence. We look forward to the positive impact this partnership will bring to both industries.”\n\nBroadcast coverage for the **United Rentals 300 at Daytona** begins at **5 p.m. ET** on **Saturday, Feb. 17**, airing on **FS1**, **MRN**, and **SiriusXM NASCAR Radio Channel 90**.",
    _id: "carolina-carports-partners-with-nascar-jrm-and-sam-mayer",
  },
  {
    isMain: false,
    title: "Ladder Leg vs. Double Leg Style",
    subheading:
      "Why Carolina Carports standardizes on the Ladder Leg style for 32’–60’ commercial buildings, and how it outperforms traditional double leg construction.",
    date: "Aug 17, 2023",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2023/08/IMG_1092.jpg",
    imageAlt:
      "Ladder leg vs double leg example on a Carolina Carports commercial steel building",
    contentMarkdown:
      "When shopping for your commercial structure, you may be offered **Double Leg** or **Ladder Leg** styles for the leg section of your metal building. If you're new to metal buildings, the difference is more than price.\n\n**Quick definitions:**\n\n- **Double Leg:** two pieces of square tubing welded together.\n- **Ladder Leg:** reinforced section ~**1 ft** wide with a **7-inch piece of tubing welded every 2 ft**.\n\nAt **Carolina Carports**, we prioritize strength and safety, so we offer the **Ladder Leg style as standard** on **all commercial structures (32’–60’ wide)**. Many other companies still manufacture double legs by default, but we believe Ladder Leg is the stronger, safer choice—so we made it the standard.\n\n---\n\n## Advantages of the Ladder Leg Style (32’–60’ wide)\n\n- **🔩 Robust Load Distribution**  \n  The ladder leg design distributes weight more uniformly across the framework, minimizing stress concentration points and helping the building better withstand external forces over time.\n\n- **🏢 Structural Integrity**  \n  Engineered for superior rigidity: components work together as a cohesive system, reinforcing the overall structural integrity of the building.\n\n- **🌬️ Wind and Weather Resilience**  \n  Rigorously tested to handle **high winds**, **heavy snow loads**, and other challenging weather conditions—reducing risk of damage from the elements.\n\n- **💪🏼 Certified Strength and Durability**  \n  Meets industry standards for strength and durability. The design and materials support long-term performance across a wide range of environments.\n\n- **🔒 Long-Term Investment**  \n  Choosing ladder leg is an investment in **safety** and **longevity**, delivering peace of mind through resilient construction.\n\n---\n\n### Bottom Line\nThe **ladder leg style** offers a higher level of **strength** and **resilience** than traditional double leg construction. It’s part of our commitment to deliver exceptional quality and lasting protection.\n\n**Choose Carolina Carports** and embrace the ladder leg advantage—uncompromising strength with clean, professional aesthetics.\n\n**Contact:** 1-800-670-4262",
    _id: "ladder-leg-vs-double-leg-style",
  },
  {
    isMain: false,
    title:
      "Building Of The Week - 60ft Wide x 112ft Long x 20ft Tall Commercial Building With A 60ft Wide x 72ft Long x 11ft Tall Side Connection",
    subheading:
      "A showcase commercial project: a 60'×112'×20' primary steel structure with a 60'×72'×11' side connection, frame-outs, vertical panels, and Pewter Gray + Deluxe Two-Tone finish.",
    date: "Mar 22, 2023",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2023/03/IMG-0494-1.jpg",
    imageAlt:
      "Large commercial steel building with attached side connection from Carolina Carports",
    contentMarkdown:
      "A **Commercial Building** can be utilized in many different ways. Our customer **Brett** needed a commercial structure for his business and chose **Carolina Carports Inc.**, the leader in metal buildings for the past 25 years, for **top manufacturing quality** and **industry-leading technology**.\n\nOur commercial structures range from **32’ to 60’ wide** and as long as you need. For this project Brett selected:\n\n- **Main building:** **60’ wide × 112’ long × 20’ tall**\n- **Side connection:** **60’ wide × 72’ long × 11’ tall**\n\n### Features Included\n- **(2) 10’×10’ frame-outs** on each **60’ wide end**\n- **(2) 36”×80” frame-outs** on each **60’ wide end**\n- **(10) 30”×44” frame-outs** on the **72’ long side**, with **(4)** on the **60’ wide end**\n- **Vertical roof, sides, and ends** on both structures\n- **Color:** **Pewter Gray** sides paired with our **Deluxe Two-Tone** option (black accents)\n\n> Our client ordered frame-outs only for this build, but we also offer **garage doors** and **windows** you can select when ordering.\n\nThis configuration provides **ample space** for business needs. **Side panels, roof, trim, and frame-outs** are all **manufactured in-house** at our **Dobson, NC** headquarters.\n\nOur **prefabricated metal buildings** cover everything from the smallest residential storage shed to large commercial warehouses. Whether you need **extra storage** or a **full commercial facility**, **Carolina Carports** can do it all—backed by 25 years of quality-first manufacturing.\n\n### Ready to customize your structure?\n- **Call:** [(800) 670-4262](tel:+18006704262)\n- **Contact us:** Our team of experts will answer your questions and tailor the building to your requirements.\n",
    _id: "building-of-the-week-60ft-wide-112ft-long-20ft-tall-commercial-building-with-a-60ft-wide-72ft-long-11ft-tall-side-connection",
  },
  {
    isMain: false,
    title: "Metal Buildings For Your Home",
    subheading:
      "Choosing a reliable, quality-driven metal building company for your home is the most important step — here’s why Carolina Carports has been trusted since 1997.",
    date: "Jun 14, 2019",
    meta: "",
    imageSrc:
      "https://carolinacarportsinc.com/wordpress/wp-content/uploads/2019/06/Slate-blue_white.effectsResult.png",
    imageAlt: "Metal Buildings for Your Home",
    contentMarkdown:
      "The hardest part of buying a **metal building** is finding a company that’s reliable enough to do the job right. Having your land leveled or pouring a concrete pad is simple compared to finding a quality metal building company.\n\nEveryone has heard the **horror stories** of contractors doing a poor job, missing deadlines, or delivering projects that cost three times more than the original estimate. Those are the kinds of issues we’ve seen customers face again and again.\n\nThat’s why, in **1997**, we started **Carolina Carports**, built on **integrity** and a commitment to **quality over quantity**. Our goal was — and still is — to provide dependable, affordable, and durable structures that stand the test of time.\n\n---\n\n### Why Choose Carolina Carports?\n- **Expert guidance:** Our **well-trained customer service representatives** understand every detail — from metal building pricing and included features to the latest offers.\n- **Transparent process:** We explain what’s included and what’s not, so you always know what you’re paying for.\n- **Free delivery and installation:** Not all metal building companies offer this, but we do — as long as your foundation is level.\n\nWhen comparing **steel building companies**, remember that not all buildings or pricing structures are the same. We use **the best materials available** while still offering **competitive pricing** on storage buildings, garages, and custom structures.\n\n---\n\n### Our Promise\nWhen you talk to one of our representatives, they’ll help you choose the **placement of walk-in doors, windows, and garage doors** and guide you through every available option to stay cost-effective.\n\n> “Quality over quantity has always been our priority — because your home deserves the best.”\n\n\nYou can even watch an overview of our building process here: [Free Building Installation on Your Level Foundation](https://www.youtube.com/watch?v=YuK5d7zNRZw)\n\nCarolina Carports continues to set the standard for excellence in **metal and steel building manufacturing**, offering homeowners peace of mind through craftsmanship, honesty, and reliability.",
    _id: "metal-buildings-for-your-home",
  },
];

/* ===============================
   CONFIG
================================= */

const imagekit = new ImageKit({
  publicKey: 'public_a+SNUMGUrPc728V6jg1N49JmBRg=',
  privateKey: 'private_/BhmJCLdJyt7km13ZK783Tjvq94=',
  urlEndpoint: 'https://ik.imagekit.io/cciimagestore',
});

/* ===============================
   IMAGE UPLOAD LOGIC
================================= */

async function uploadImageFromUrl(imageUrl, folder = "news") {
  try {
    console.log(`⬆ Fetching image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image (${response.status})`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const cleanFileName =
      imageUrl.split("/").pop()?.split("?")[0] || "image.jpg";

    const uploadResponse = await imagekit.upload({
      file: buffer.toString("base64"),
      fileName: cleanFileName,
      folder,
    });

    console.log(`✅ Uploaded → ${uploadResponse.url}`);

    return uploadResponse.url;
  } catch (error) {
    console.error("❌ Image upload failed:", error.message);
    return imageUrl; // fallback to original
  }
}

/* ===============================
   MARKDOWN IMAGE PROCESSOR
   (ONLY ![...](image-url))
================================= */

async function processMarkdownImages(markdown) {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;

  let updatedMarkdown = markdown;
  const matches = [...markdown.matchAll(imageRegex)];

  for (const match of matches) {
    const oldUrl = match[1];

    // Skip if already ImageKit URL
    if (oldUrl.includes('https://ik.imagekit.io/cciimagestore')) continue;

    const newUrl = await uploadImageFromUrl(oldUrl, "blog-content");

    updatedMarkdown = updatedMarkdown.replace(oldUrl, newUrl);
  }

  return updatedMarkdown;
}

/* ===============================
   MAIN BLOG UPLOAD FUNCTION
================================= */

async function uploadBlogs(newsArray) {
  for (const blog of newsArray) {
    try {
      console.log(`\n🔄 Processing: ${blog.title}`);

      // 1️⃣ Upload main image
      if (blog.imageSrc) {
        if (!blog.imageSrc.includes('https://ik.imagekit.io/cciimagestore')) {
          blog.imageSrc = await uploadImageFromUrl(
            blog.imageSrc,
            "blog-main"
          );
        }
      }

      // 2️⃣ Upload markdown images
      if (blog.contentMarkdown) {
        blog.contentMarkdown = await processMarkdownImages(
          blog.contentMarkdown
        );
      }

      // 3️⃣ Send to existing News API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) {
        throw new Error(`Blog upload failed (${response.status})`);
      }

      console.log(`✅ Blog uploaded: ${blog.title}`);
    } catch (error) {
      console.error(
        `❌ Error processing "${blog.title}":`,
        error.message
      );
    }
  }

  console.log("\n🎯 All blogs processed successfully.");
}

/* ===============================
   RUN SCRIPT
================================= */

uploadBlogs(blogs);
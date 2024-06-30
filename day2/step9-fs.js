let fs = require("node:fs");

/* 
in the html file use
Lorem*10 
*/
let data = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus, neque accusantium facilis distinctio ullam voluptates ipsa, nobis rerum accusamus quo perspiciatis libero corrupti sapiente dignissimos eum ut aliquam recusandae.
Vel quos libero rerum. Cupiditate porro doloremque maxime tenetur nulla cum excepturi est modi dolorem, nisi repudiandae magnam hic quidem officia quasi dolor, voluptatibus odio quam iure libero fugiat illum!
Recusandae sunt architecto reiciendis, dolores adipisci dolorem sit minima modi hic enim voluptate dicta aspernatur dignissimos accusantium pariatur quia non ducimus quod? Fugit consectetur tempore illum quibusdam ullam illo voluptate.
Perferendis nemo ipsam ex voluptate possimus, minus commodi ad quos consequuntur, sapiente aliquam eligendi nihil esse sequi repellendus ab, odit dolore ducimus veniam architecto. Magni eum nisi quae et fuga?
Recusandae qui sint saepe cupiditate, at ipsum earum modi incidunt! Perferendis qui nihil suscipit optio nostrum recusandae dolore at mollitia impedit? Sint tempora id veritatis accusantium animi quae doloremque hic?
Animi eligendi doloremque quod illum rem laborum dolor? Ad saepe laboriosam adipisci aliquid in esse vel unde et nostrum expedita, minus quibusdam nihil sequi ipsam repellat, ratione consequuntur corporis facere.
Ab fugiat, numquam cumque consectetur, quisquam laboriosam pariatur excepturi cupiditate quo, molestiae distinctio. Nam sint perspiciatis, odio culpa, aut repellendus distinctio fugit, nobis voluptatem in labore ab saepe aspernatur praesentium.
Nihil autem quaerat minus quod laborum, alias exercitationem magnam accusantium fuga quam tempora quas aliquid velit eius sunt odit veritatis minima. Assumenda molestiae harum vel omnis? Illo quam reprehenderit eius?
Tempore iste voluptatem suscipit sit commodi quis consequuntur soluta a, inventore facilis esse tenetur animi itaque in hic ut voluptate quo? Facilis, eum. Atque dolores vel corporis fugiat excepturi quam.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus, neque accusantium facilis distinctio ullam voluptates ipsa, nobis rerum accusamus quo perspiciatis libero corrupti sapiente dignissimos eum ut aliquam recusandae.
Vel quos libero rerum. Cupiditate porro doloremque maxime tenetur nulla cum excepturi est modi dolorem, nisi repudiandae magnam hic quidem officia quasi dolor, voluptatibus odio quam iure libero fugiat illum!
Recusandae sunt architecto reiciendis, dolores adipisci dolorem sit minima modi hic enim voluptate dicta aspernatur dignissimos accusantium pariatur quia non ducimus quod? Fugit consectetur tempore illum quibusdam ullam illo voluptate.
Perferendis nemo ipsam ex voluptate possimus, minus commodi ad quos consequuntur, sapiente aliquam eligendi nihil esse sequi repellendus ab, odit dolore ducimus veniam architecto. Magni eum nisi quae et fuga?
Recusandae qui sint saepe cupiditate, at ipsum earum modi incidunt! Perferendis qui nihil suscipit optio nostrum recusandae dolore at mollitia impedit? Sint tempora id veritatis accusantium animi quae doloremque hic?
Animi eligendi doloremque quod illum rem laborum dolor? Ad saepe laboriosam adipisci aliquid in esse vel unde et nostrum expedita, minus quibusdam nihil sequi ipsam repellat, ratione consequuntur corporis facere.
Ab fugiat, numquam cumque consectetur, quisquam laboriosam pariatur excepturi cupiditate quo, molestiae distinctio. Nam sint perspiciatis, odio culpa, aut repellendus distinctio fugit, nobis voluptatem in labore ab saepe aspernatur praesentium.
Nihil autem quaerat minus quod laborum, alias exercitationem magnam accusantium fuga quam tempora quas aliquid velit eius sunt odit veritatis minima. Assumenda molestiae harum vel omnis? Illo quam reprehenderit eius?
Tempore iste voluptatem suscipit sit commodi quis consequuntur soluta a, inventore facilis esse tenetur animi itaque in hic ut voluptate quo? Facilis, eum. Atque dolores vel corporis fugiat excepturi quam.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus, neque accusantium facilis distinctio ullam voluptates ipsa, nobis rerum accusamus quo perspiciatis libero corrupti sapiente dignissimos eum ut aliquam recusandae.
Vel quos libero rerum. Cupiditate porro doloremque maxime tenetur nulla cum excepturi est modi dolorem, nisi repudiandae magnam hic quidem officia quasi dolor, voluptatibus odio quam iure libero fugiat illum!
Recusandae sunt architecto reiciendis, dolores adipisci dolorem sit minima modi hic enim voluptate dicta aspernatur dignissimos accusantium pariatur quia non ducimus quod? Fugit consectetur tempore illum quibusdam ullam illo voluptate.
Perferendis nemo ipsam ex voluptate possimus, minus commodi ad quos consequuntur, sapiente aliquam eligendi nihil esse sequi repellendus ab, odit dolore ducimus veniam architecto. Magni eum nisi quae et fuga?
Recusandae qui sint saepe cupiditate, at ipsum earum modi incidunt! Perferendis qui nihil suscipit optio nostrum recusandae dolore at mollitia impedit? Sint tempora id veritatis accusantium animi quae doloremque hic?
Animi eligendi doloremque quod illum rem laborum dolor? Ad saepe laboriosam adipisci aliquid in esse vel unde et nostrum expedita, minus quibusdam nihil sequi ipsam repellat, ratione consequuntur corporis facere.
Ab fugiat, numquam cumque consectetur, quisquam laboriosam pariatur excepturi cupiditate quo, molestiae distinctio. Nam sint perspiciatis, odio culpa, aut repellendus distinctio fugit, nobis voluptatem in labore ab saepe aspernatur praesentium.
Nihil autem quaerat minus quod laborum, alias exercitationem magnam accusantium fuga quam tempora quas aliquid velit eius sunt odit veritatis minima. Assumenda molestiae harum vel omnis? Illo quam reprehenderit eius?
Tempore iste voluptatem suscipit sit commodi quis consequuntur soluta a, inventore facilis esse tenetur animi itaque in hic ut voluptate quo? Facilis, eum. Atque dolores vel corporis fugiat excepturi quam.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus, neque accusantium facilis distinctio ullam voluptates ipsa, nobis rerum accusamus quo perspiciatis libero corrupti sapiente dignissimos eum ut aliquam recusandae.
Vel quos libero rerum. Cupiditate porro doloremque maxime tenetur nulla cum excepturi est modi dolorem, nisi repudiandae magnam hic quidem officia quasi dolor, voluptatibus odio quam iure libero fugiat illum!
Recusandae sunt architecto reiciendis, dolores adipisci dolorem sit minima modi hic enim voluptate dicta aspernatur dignissimos accusantium pariatur quia non ducimus quod? Fugit consectetur tempore illum quibusdam ullam illo voluptate.
Perferendis nemo ipsam ex voluptate possimus, minus commodi ad quos consequuntur, sapiente aliquam eligendi nihil esse sequi repellendus ab, odit dolore ducimus veniam architecto. Magni eum nisi quae et fuga?
Recusandae qui sint saepe cupiditate, at ipsum earum modi incidunt! Perferendis qui nihil suscipit optio nostrum recusandae dolore at mollitia impedit? Sint tempora id veritatis accusantium animi quae doloremque hic?
Animi eligendi doloremque quod illum rem laborum dolor? Ad saepe laboriosam adipisci aliquid in esse vel unde et nostrum expedita, minus quibusdam nihil sequi ipsam repellat, ratione consequuntur corporis facere.
Ab fugiat, numquam cumque consectetur, quisquam laboriosam pariatur excepturi cupiditate quo, molestiae distinctio. Nam sint perspiciatis, odio culpa, aut repellendus distinctio fugit, nobis voluptatem in labore ab saepe aspernatur praesentium.
Nihil autem quaerat minus quod laborum, alias exercitationem magnam accusantium fuga quam tempora quas aliquid velit eius sunt odit veritatis minima. Assumenda molestiae harum vel omnis? Illo quam reprehenderit eius?
Tempore iste voluptatem suscipit sit commodi quis consequuntur soluta a, inventore facilis esse tenetur animi itaque in hic ut voluptate quo? Facilis, eum. Atque dolores vel corporis fugiat excepturi quam.
Saepe dicta sit at, sequi inventore cum suscipit maxime, molestiae architecto impedit minima commodi natus nesciunt provident id officia animi. Similique perferendis, illum repudiandae dignissimos fuga ea praesentium tenetur inventore.
`
// create file
// sync
/*  
fs.writeFileSync("temp.txt",data+" : \n written at "+new Date().getUTCMilliseconds());
 console.log("file is ready ", new Date().getUTCMilliseconds()); 
 */
// async

fs.writeFile("temp.txt",data+" : \n written at "+new Date()+" "+new Date().getMilliseconds(),function(){
    console.log("inside the fs callback ", new Date()+" "+new Date().getMilliseconds() )
});
console.log("outside the fs callback ", new Date()+" "+new Date().getMilliseconds() ); 
// read file
// delete file
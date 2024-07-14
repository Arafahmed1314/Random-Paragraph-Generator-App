const paragraphs = [
  "The sun set over the mountains, casting a warm glow across the valley. Birds chirped softly as the day came to an end, creating a symphony of natural sounds that was both calming and invigorating. People in the village began to light their lanterns, preparing for the evening ahead. The scent of fresh bread wafted through the streets, inviting everyone to the local bakery, where the baker was pulling out the last batch of the day. It was a peaceful and serene evening, perfect for a stroll through the cobblestone streets, where neighbors greeted each other with warm smiles and exchanged stories about their day. Children played in the fading light, their laughter echoing through the air, while the elders gathered in small groups, reminiscing about the past and discussing the future. The sky gradually turned from orange to pink to deep purple, dotted with the first stars of the night, signaling that it was time to head home and enjoy the warmth and comfort of family and friends. It was a moment of pure contentment, where the simple pleasures of life were fully appreciated and savored.",
  "The city buzzed with life as cars honked and people hurried to their destinations, creating a constant backdrop of noise and movement. Street vendors called out their daily specials, hoping to attract customers with the tantalizing aromas of their food. Children laughed and played in the park, their joy infectious as they ran around, swinging on the monkey bars and chasing each other across the green grass. The aroma of freshly brewed coffee drifted from the nearby café, enticing passersby to stop for a quick pick-me-up. Businessmen and women rushed by, clutching briefcases and talking on their phones, while tourists strolled leisurely, taking in the sights and sounds of the bustling metropolis. The streets were alive with energy, a melting pot of different cultures and backgrounds, all coming together in this vibrant urban landscape. Street performers entertained crowds with their talents, from musicians strumming guitars to magicians pulling off impressive tricks. The sun shone brightly overhead, casting long shadows on the pavement, as the city continued its relentless pace, never slowing down, always moving forward.",
  "A gentle breeze rustled the leaves of the trees, creating a soothing sound that was like nature's own lullaby. The lake reflected the clear blue sky, dotted with fluffy white clouds that seemed to drift lazily across the horizon. Fishermen cast their lines, hoping for a good catch, their boats gently bobbing on the water's surface. Families picnicked by the shore, enjoying the perfect weather as they spread out blankets and unpacked baskets filled with delicious food. Children played by the water's edge, skipping stones and splashing in the shallow areas, their laughter ringing out across the serene landscape. Nature offered a tranquil escape from the busy world, a place where time seemed to slow down and the worries of everyday life faded away. Birds flew overhead, their songs blending with the gentle rustling of the leaves, creating a symphony of natural sounds. The sun began its descent, casting a golden glow over the scene, as people relaxed and enjoyed the beauty of their surroundings, feeling at peace with the world.",
  "The school bell rang, signaling the end of the day and the beginning of the students' freedom. They poured out of the classrooms, excited to go home and share the events of the day with their families. Friends made plans to meet up later, chatting animatedly as they walked to the bus stop or their parents' cars. Others headed straight to their extracurricular activities, eager to practice their skills in sports, music, or art. Teachers tidied up their desks, organizing papers and preparing for the next day's lessons, reflecting on the progress their students had made. The campus slowly emptied as the afternoon wore on, the once bustling hallways now quiet and still. The janitors began their rounds, cleaning and maintaining the school to ensure it was ready for another day of learning. It was a time of transition, from the structured environment of the classroom to the freedom and relaxation of home, a moment of anticipation and reflection for everyone involved.",
  "In the kitchen, the chef prepared a delicious meal with fresh ingredients, his movements precise and practiced. The sound of chopping vegetables and sizzling pans filled the room, creating a rhythm that was almost musical. The smell of garlic and herbs wafted through the air, making everyone's mouth water in anticipation. The sous-chefs worked diligently, following the head chef's instructions to the letter, their focus unwavering as they chopped, sautéed, and plated each dish. It was a symphony of culinary artistry, where every element came together to create a meal that was both visually stunning and incredibly flavorful. The waitstaff moved efficiently, setting tables and preparing to serve the guests who would soon arrive. The restaurant was a hive of activity, each person playing their part to ensure that everything ran smoothly. The ambiance was warm and inviting, with soft lighting and elegant décor that set the stage for a memorable dining experience. As the first guests arrived and were seated, the kitchen staff took a moment to appreciate their hard work before diving back into the task at hand.",
  "The office was a hive of activity as employees worked on their projects, the clatter of keyboards and murmurs of conversation creating a constant hum. Meetings were held to discuss strategies and progress, with team members brainstorming ideas and collaborating on solutions. Coffee breaks provided a brief respite from the hectic pace, as colleagues chatted and recharged with their favorite caffeinated beverages. It was another productive day at the company, where everyone was focused on achieving their goals and delivering results. The open-plan layout encouraged communication and collaboration, with teams working together to tackle challenges and find innovative solutions. The atmosphere was both intense and motivating, with a sense of camaraderie and shared purpose driving everyone forward. As the day progressed, the office buzzed with energy, a testament to the dedication and hard work of the employees. The sun began to set, casting a warm glow through the windows, signaling the end of the workday and the beginning of a well-deserved evening of rest and relaxation.",
  "The library was a haven of quiet and knowledge, a place where students and researchers could immerse themselves in their work. Rows of bookshelves stretched as far as the eye could see, filled with volumes on every conceivable topic. The smell of old paper and ink was comforting to many, a reminder of the wealth of information contained within those pages. Students and researchers poured over books and laptops, engrossed in their work as they took notes and wrote papers. Librarians moved quietly through the aisles, helping patrons find the resources they needed and ensuring that everything was in order. It was a place where curiosity and learning thrived, where people came to expand their knowledge and explore new ideas. The atmosphere was serene and focused, with the only sounds being the rustle of pages and the occasional whispered conversation. The library offered a sanctuary from the outside world, a place where the pursuit of knowledge was valued and encouraged.",
  "The market was vibrant with colors and sounds, a bustling hub of activity where vendors and shoppers came together. Stalls overflowed with fresh fruits, vegetables, and handmade goods, creating a kaleidoscope of colors and textures. Shoppers haggled for the best prices, enjoying the lively atmosphere and the opportunity to find unique items. Street performers entertained the crowd with music and magic tricks, their talents adding to the festive mood. The market was a celebration of community and culture, a place where people could connect with each other and enjoy the simple pleasures of life. The aroma of freshly baked bread and sizzling street food filled the air, tempting everyone to indulge in a tasty treat. Children ran between the stalls, their laughter and excitement infectious as they explored the market with wide-eyed wonder. It was a place of energy and joy, where the spirit of the community was alive and thriving.",
  "The train station was filled with travelers going to various destinations, each with their own story and purpose. Announcements echoed through the hall, guiding passengers to their platforms and keeping everyone informed of the latest schedules. The scent of fresh pastries from a nearby kiosk tempted many to grab a snack before their journey. Luggage wheels clattered on the floor as people moved swiftly, navigating the busy station with practiced ease. It was the heartbeat of the city's transportation, a place where the paths of countless individuals crossed each day. The hustle and bustle were a testament to the constant movement and energy of the city, as people came and went, always on the move. Families hugged goodbye, friends reunited, and business travelers prepared for their next meeting, all sharing the same space for a brief moment in time. The train station was a microcosm of the city's vibrancy, a place where the stories of many intersected and continued on their way.",
  "The beach was a paradise of sun, sand, and sea, a place where people came to relax and enjoy the beauty of nature. Waves lapped gently at the shore, inviting swimmers to take a dip and cool off from the heat. Families built sandcastles and played games, creating cherished memories that would last a lifetime. The salty breeze and sound of seagulls added to the perfect day, making it easy to forget the worries of everyday life. Sunbathers lounged on towels, soaking up the rays and working on their tans, while surfers rode the waves with skill and grace. It was a place of relaxation and fun, where the natural beauty of the ocean provided a stunning backdrop for all kinds of activities. As the sun began to set, painting the sky with vibrant hues of orange and pink, people gathered to watch the breathtaking spectacle, a perfect end to a perfect day at the beach.",
];
const parentPara = document.querySelector(".para");
function makePara(para) {
  const html = `  <p>${para}</p>`;
  parentPara.innerHTML += html;
}

const button = document.querySelector(".btn").addEventListener("click", () => {
  parentPara.innerHTML = "";
  const inputValue = document.getElementById("input").value;

  for (let i = 1; i <= inputValue; i++) {
    const randomValue = Math.floor(Math.random() * paragraphs.length - 1 + 1);
    console.log(randomValue);
    makePara(paragraphs[randomValue]);
  }

  document.getElementById("input").value = "";
});

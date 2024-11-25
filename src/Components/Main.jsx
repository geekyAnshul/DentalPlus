import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FaChevronRight } from "react-icons/fa";
import brushing from "../assets/brushing.webp"

function Main() {

  return (
    <div className=" poppins md:pl-40 md:pr-40 md:pb-10  md:pt-5   md:w-full sm:px-5 sm:py-2">
      <div className="flex items-center mb-4 sm:flex ">
        <NavLink to="/" className="text-yellow-500  hover:text-gray-700  ">
          <h1 className='sm:text-md sm:tracking-tighter '>Home Page</h1>
        </NavLink>
        <span className="mx-4 sm:mx-1 "> <FaChevronRight className='font-extralight text-sm sm:mx-1'/>  </span>
        <NavLink to="/dental-health" className="text-yellow-500 hover:text-gray-700 sm:text-md sm:tracking-tighter ">
          Dental Health
        </NavLink>
        <span className="mx-4 sm:mx-1"> <FaChevronRight className='font-extralight text-sm sm:mx-1 '/>  </span>
        <span className="text-gray-500 poppins sm:text-md sm:tracking-tighter">7 Steps for the Best Oral Hygiene Routine</span>
      </div>
      <h1 className="md:text-6xl  leading-snug tracking-tight  font-extrabold mb-6 mt-10 sm:text-4xl ">7 Steps for the Best Oral Hygiene Routine</h1>
      
      <img
        src={brushing}
        alt="Woman brushing her teeth"
        className="rounded-2xl shadow-md mt-10 w-full object-contain "
      />

      <div className='md:mt-12 poppins sm:mt-6'>
        <p className='text-xl text-zinc-800 tracking-tight font-normal sm:text-lg'>
        It’s not hard or impossible to have the best oral hygiene routine for healthier teeth and gums. With great preventative care and these seven steps, you can cut down on your risk of periodontitis, bad breath, tooth decay, and even stains on your teeth. While seven steps to better oral hygiene may sound complicated (or time-consuming,) it’s easier than you might expect.
        </p>
      </div>

      <h1 className="md:text-5xl font-extrabold leading-tight  mb-4 mt-10 sm:text-3xl sm:mb-2">Why Is Oral Hygiene So Important?</h1>

<div className="poppins">
      {/* First Section */}
      <div className="mt-12 sm:mt-6">
        <p className="text-xl text-zinc-800 tracking-tight font-normal sm:text-lg">
          Why exactly is good oral hygiene so important? While there are plenty of reasons, such as having fresher breath, there are some pretty big ones you don’t want to overlook. Oral hygiene is paramount to good overall wellness. 
         
        </p>

        {/* Hidden Content */}
       
          <p className="text-xl text-zinc-800 tracking-tight font-normal sm:text-lg">
            With poor oral hygiene can come poor oral health including high cavity rates and gum disease. Depending on your other health risks, underlying issues can be further aggravated. Poor oral hygiene can lead to an increased risk of cardiovascular disease, diabetes complications, and an increased risk of Alzheimer’s, respiratory infections, and even pregnancy complications (among others.)
          </p>
        
      </div>


        
          <h1 className="md:text-5xl transition-all duration-1000 ease-in-out
 font-extrabold leading-tight mb-4 mt-10 sm:text-3xl sm:mb-1 ">
            What Are The Best Products I Should Use?
          </h1>

          <div className="md:mt-12 sm:mt-6">
            <p className="text-xl text-zinc-800 tracking-tight font-normal sm:text-lg">
              It's not just about the products; it's about the routine. Don't get me wrong; there are excellent oral hygiene products designed to address specific issues like toothpaste formulated for gum disease or cavities. These will definitely help, but it's your overall routine that will keep your teeth healthy. The best way to avoid oral health problems and keep your teeth healthy is to practice good oral hygiene every day. I cover all the tools you need for excellent oral hygiene in my dental care guide, which you can get{' '}
              <span className="text-yellow-500 cursor-pointer hover:text-yellow-700">
                here
              </span>{' '}
              for free.
            </p>
          </div>
          


      <h1 className="md:text-6xl font-extrabold leading-tight tracking-tight  mb-4 md:md:mt-10 sm:text-4xl sm:mt-8">7 Oral Health Tips for the Best Oral Hygiene Routine</h1>
      <h1 className="md:text-4xl font-extrabold leading-tight   md:mb-4 md:mt-10 sm:text-3xl sm:mt-5 sm:mb-2 ">1. Brushing Technique </h1>

      <div className='mt-12 poppins sm:mt-6'>
        <p className='text-xl text-zinc-800 tracking-tight font-normal'>
        When it comes to <span className="text-yellow-500 cursor-pointer hover:text-yellow-700 sm:text-lg">toothbrushing</span>, it sounds like it’s straight forward. Right? Believe it or not, many of us are brushing with the wrong technique and we don’t even realize it. Without the proper technique, plaque may not be removed effectively. Gum tissue could be brushed too hard, potentially causing gum recession. It won’t take long for your oral health to go south. When you leave plaque behind, you’re likely to develop gum inflammation and tooth decay. 
        </p>
      </div>
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl"> The Right Toothbrush And Toothpaste </h1>
      {/* <h1 className="text-6xl font-extrabold leading-tight  mb-4 mt-10">Why Is Oral Hygiene So Important?</h1> */}
     
      <div className='mt-12 poppins sm:mt-6'>
        <p className='text-xl text-zinc-800 tracking-tight font-normal sm:text-lg '>
        Your oral health needs will determine the best type of toothbrush and toothpaste for your situation. While you should always discuss what is best for your oral hygiene routine with your dentist or dental hygienist, there are a few things to keep in mind. Almost all of us benefit from using...
        </p>

        <ul className='mt-7 ml-5 poppins sm:mt-6 sm:text-lg'>
            <li className='text-xl text-zinc-800  font-normal poppins sm:text-lg'> <b >A soft bristled toothbrush </b>- A soft bristled brush is gentle yet effective. It’s best to avoid medium and hard bristles that can cause damage to the gum tissues.</li>
            <li className='text-xl text-zinc-800  font-normal mt-1 sm:text-lg'> <b className='text-yellow-600'>Electric toothbrushes </b> - Electric toothbrushes make the job even easier. Also, different sized handles can help if you struggle with dexterity.</li>
            <li className='text-xl text-zinc-800  font-normal mt-1 sm:text-lg'> <b>Fluoride Toothpaste </b> - Toothpaste choices can be narrowed down by needs as well. If you have a higher risk of developing cavities, toothpastes that contain fluoride or hydroxyapatite may be a good option. If you suffer from sensitivity, something like a sensitivity toothpaste may be best.</li>
        </ul>

        <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Talk to your dental hygienist to dive in deep on what is best for your oral hygiene routine and to make sure you are on the right track</p>
      </div>

      

      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">How To Properly Brush Teeth and Gums</h1>

     
      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:mt-6 sm:text-lg'>What does effective brushing look like in a proper oral hygiene routine? Typically, it means you will be gently brushing at a 45-degree angle toward your gumlines. Be sure to clean all of the inside, outside, and chewing surfaces of every tooth. Brushing removes the food particles and dental plaque buildup from the last meal. Brush for 2 minutes, twice a day.</p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">2. Flossing or Interdental Cleaning</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'><span className="text-yellow-600 cursor-pointer hover:text-yellow-700">Flossing</span> is crucial for an effective oral hygiene routine! Flossing removes harmful plaque bacteria from between your teeth (where a brush doesn’t reach) and beneath the gumline. If you don’t floss, you can develop cavities between teeth, as well as gum disease. Depending on the severity of your gum infection, conditions like tooth mobility, tooth loss, and systemic health effects can occur.</p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:mt-6 sm:text-3xl">Types Of Dental Floss</h1>

      <p className='text-xl text-zinc-800  font-normal mt-7 sm:text-lg'>There are dozens of ways to clean between your teeth. Waxed floss, non-waxed, floss threaders, floss picks, water flossers…there are (almost) <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">too many options !</span> The type of interdental aid you choose is up to you and your specific smile. While good old fashion string floss is a great and safe option, some people find it tough to maneuver. For people with larger hands, floss picks with extended handles may be more realistic. Talk to your dental provider about what works best for you.  <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">Water Flossers</span> are great especially if you have fixed bridges, implants, or permanent retainers to clean around.</p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:mt-6 sm:text-3xl">Proper Flossing Technique</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7sm:mt-6 sm:text-lg'>Proper flossing techniques will depend on what device you are using. If string floss is what you’re using, the “C-shape method” is the standard method! This requires wrapping floss around both middle fingers on your left and right hand, while simultaneously using your pointer finger and thumb to maneuver the floss properly between your teeth. Ensure you are wrapping the floss in a C-shape and allow it to slip under the edges of your gums to properly get below the gumline of every tooth. </p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:mt-6 sm:text-3xl">3. Tongue Scraping </h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:mt-6 sm:text-lg'> <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">Tongue Scraping</span> helps to reduce bacteria by scraping off buildup, plaque, and food residue on the top surface of the tongue. This simple yet effective method of cleaning the tongue helps to reduce bad breath and control bacteria levels!</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 sm:text-2xl">How Tongue Scraping Removes Bacteria And Improves Breath</h1>



      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:mt-6 sm:text-lg'>By properly tongue scraping you are removing bacteria, dead cells, and food debris that can accumulate on the surface of the tongue. While reducing bad breath from tongue scraping is a short-term fix, it highlights the importance of properly tongue scraping on a daily basis. </p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 sm:text-2xl">Techniques And Tools For Effective Tongue Scraping</h1>


      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Tongue scraping is rather simple. Stick your tongue out fully, place the tongue scraper on the back of your tongue, then gently press down and drag it in a forward motion. This can be done 1-2x/day after brushing and flossing.</p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">4. Mouthwash and Rinsing </h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Mouthwash can be a helpful adjunct to your oral hygiene routine, but just remember that it doesn’t replace flossing or other forms of interdental cleaning. From reducing unwanted bacteria, to freshening our breath, mouthwash is a fan favorite!</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 sm:text-2xl">Types Of Mouthwash</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Whether you need a mouthwash to protect your teeth from cavities, dry mouth, or something to help heal mouth ulcers, there is truly something for everyone. There are even prescription-strength rinses for people with gum disease. Be sure to discuss your options with your dental provider to determine what is best for your specific condition.</p>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg '>Using the Right Mouthwash</p>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Every mouthwash is different. Some are best for daily use; others are short-term and/or require a specific duration of time that is needed to aid in oral health conditions. Be sure to use your product as directed, according to the advice of your dental provider.</p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">5. Maintaining a Healthy Diet </h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>No, it’s not brushing and flossing, but your diet and nutrition are one of the most important things you can use to improve your oral health. Vitamin deficiencies can manifest as oral health challenges such as inflammation and poor oral health.</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 sm:text-2xl">Best Foods for Healthy Teeth And Gums</h1>

    

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Foods that contain fat soluble vitamins such as A,D,E, and K help to support gum and tooth health. Vitamin C also plays a vital role in good gum health. Try to eat foods like liver, dairy products, quality red meats, chicken on the bone, garlic, and avocado when you can!</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 sm:text-2xl">Foods To Avoid </h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>When it comes to avoiding foods, we all know sugar is enemy number one for our teeth! Candies, sodas, and other sweet drinks (including diet soda and sports drinks) should be limited to avoid high rates of decay. It’s also important to limit ultra-processed foods. Think chips, crackers, granola bars and fast food. These foods tend to be highly palatable, with minimal nutrition. Not to mention they’re usually sky high in calories. Be sure to balance them with healthy whole grains and fresh fruits and vegetables.</p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">6. Limiting Sugary and Acidic Foods  </h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>.As we briefly mentioned, we want to limit sugary foods as much as we can. These products can seriously impact our oral health when it comes to tooth decay and acid levels in our mouth. Acidic food and drinks can also erode tooth enamel and can increase tooth decay, sensitivity and more!</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 sm:text-2xl">Risks Sugary And Acidic Foods</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>.Knowing the risk of sugary and acidic food and drinks will help you make better choices to improve your oral health. Understanding the pH level of what you eat can be a great strategy to help you choose what is  <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">best to consume</span> Ask you dental provider or a simple internet search to evaluate food and drinks for their pH or acid level to help rule out common offenders.</p>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Reducing sugar can be a bit of a challenge but it’s not impossible to improve our habits for a better oral hygiene routine! Watering down sugary drinks like juice can be a great start. Sipping on water between sips of coffee can help reduce acid levels in your mouth, and drink through a straw if you can to minimize contact time. </p>
      
      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">7. Regular Dental Check-ups and Cleanings</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>By seeing your dentist and dental hygienists for routine dental appointments  <span className="text-yellow-600 cursor-pointer hover:text-yellow-700">every six month.</span> you are taking one of the most important steps towards an effective oral hygiene routine. Dental professionals can spot concerns in their earlier stages to ensure conditions are diagnosed, treated—or even better—prevented! </p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10 ">Benefits Of Professional Dental Cleanings</h1>


     

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg '>Seeing your dental hygienist can keep you on the path to the great oral health that we all aim for. Professional dental cleanings can keep inflammation at bay by removing bacteria buildup along your teeth and gums. These visits can also help reduce your risk of tooth decay, get individualized oral hygiene advice, and screen for issues while they’re reversible. </p>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg '>A great dentist will be happy to see you regardless of how long it’s been since your last checkup; there’s no need to be embarrassed! People with healthy teeth and gums should plan on scheduling a checkup every six months. If you’ve had gum disease, you might need more frequent visits (as often as every 3-4 months.)</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10">Get An Oral Health Coach</h1>
      
      

      <h1 className="md:text-4xl font-extrabold leading-tight   mb-4 mt-10 sm:text-3xl">What Are The Advantages Of Good Oral Hygiene?</h1>
      

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>By keeping up with your oral hygiene routine, you are on the path to better oral and overall health. Remember, your mouth is connected to the rest of your body! Oral bacteria can easily spread through your cardiovascular system and strain your immune response. Prevention is the best form of oral care, and is possible to achieve with the right tools and techniques.</p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10">What Conditions Are Linked To Oral Health?</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Conditions that are significantly linked to oral health include diabetes, Alzheimer’s, dementia, cancer treatments, stroke, heart disease, pneumonia, autoimmune disorders, erectile dysfunction, infertility, vitamin deficiencies, pregnancy and so much more. Research is just starting to catch up to what dental professionals have known all along. Oral health IS health. </p>
      
      <h1 className="md:text-3xl font-extrabold leading-tight   mb-4 mt-10">Creating a Good Oral Hygiene Routine</h1>

      <p className='text-xl text-zinc-800 tracking-tight font-normal mt-7 sm:text-lg'>Good oral health starts with a great oral hygiene routine! Keep your teeth and gums happy by properly brushing, flossing, and having open conversations with your dental provider at your bi-annual checkups. With so many systemic health conditions linked to oral health, it’s crucial to care for your smile’s needs, whatever they may be!</p>


    </div>

    </div>

    
  );
}

export default Main;

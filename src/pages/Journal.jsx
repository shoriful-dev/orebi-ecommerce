import Container from '../components/Container';
import Image from '../components/Image';
import ImageOne from '../assets/JornalOne.png';
import ImageTwo from '../assets/JornalTwo.png';
import ImageThree from '../assets/JornalThree.png';
import ImageFour from '../assets/JornalFour.png';
import ImageFive from '../assets/JornalFive.png';
import ImageSix from '../assets/JornalSix.png';
import ImageSeven from '../assets/JornalSeven.png';
import ImageEight from '../assets/JornalEight.png';
import { Link } from 'react-router-dom';

const Journal = () => {
  return (
    <>
      <Container>
        <div className="container mx-auto px-4 py-8 mt-20">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-40">Journal</h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Blog Post */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageOne}
                    alt="Wooden stool with artistic object"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Second Blog Post */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageTwo}
                    alt="White t-shirt on dark background"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Third Blog Post */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageThree}
                    alt="White modern chair"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Fourth Blog Post */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageFour}
                    alt="White chairs"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Fifth Blog Post (Coffee Cup) */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageFive}
                    alt="Coffee cup on a table"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Sixth Blog Post (Desk Items) */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageSix}
                    alt="Desk items including a lamp"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Seventh Blog Post (New) */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageSeven}
                    alt="Abstract geometric shape"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>

                {/* Eighth Blog Post (New) */}
                <article className="space-y-4">
                  <Image
                    imgSrc={ImageEight}
                    alt="Minimalist landscape"
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-[#767676]">Category</p>
                    <h2 className="text-2xl font-bold pt-5 pb-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="text-base text-muted-foreground line-clamp-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </article>
              </div>

              {/* Black Button */}
              <div className="mt-12 flex">
                <Link to={'/'}>
                  <button className="px-8 py-3 bg-black text-white rounded-md hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-gray-700">
                    Load More
                  </button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Recent Posts */}
              <section>
                <h2 className="font-bold mb-5 text-xl">Recent Posts</h2>
                <ul className="space-y-5 mb-10">
                  {[...Array(5)].map((_, i) => (
                    <li key={i} className="text-xl text-[#767676]">
                      • Lorem ipsum dolor, simply dummy text of the printing and
                      typesetting.
                    </li>
                  ))}
                </ul>
              </section>

              {/* Archives */}
              <section>
                <h2 className="font-bold mb-5 text-xl">Archives</h2>
                <ul className="space-y-2">
                  <li className="text-base text-muted-foreground">
                    • May 2023
                  </li>
                </ul>
              </section>

              {/* Categories */}
              <section>
                <h2 className="font-bold mb-5 text-xl">Categories</h2>
                <ul className="space-y-2">
                  <li className="text-base text-muted-foreground">
                    • Category 1
                  </li>
                  <li className="text-base text-muted-foreground">
                    • Category 2
                  </li>
                  <li className="text-base text-muted-foreground">
                    • Category 3
                  </li>
                  <li className="text-base text-muted-foreground">
                    • Category 4
                  </li>
                </ul>
              </section>

              {/* Meta */}
              <section>
                <h2 className="font-bold mb-5 text-xl">Meta</h2>
                <ul className="space-y-2 mb-10">
                  <li className="text-base text-muted-foreground">• Log in</li>
                  <li className="text-base text-muted-foreground">
                    • Entries RSS
                  </li>
                </ul>
              </section>

              {/* Tags */}
              <section>
                <h2 className="font-bold mb-5 text-xl">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-6 py-2 bg-black text-white text-sm rounded">
                    Design
                  </span>
                  <span className="px-6 py-2 bg-black text-white text-sm rounded">
                    Tech
                  </span>
                  <span className="px-6 py-2 bg-black text-white text-sm rounded">
                    Travel
                  </span>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Journal;

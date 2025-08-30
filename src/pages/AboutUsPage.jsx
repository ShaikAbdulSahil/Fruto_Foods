import React from 'react'
import logo_large from '../assets/images/logo_large.png';

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-800">Fruto Foods</h1>
        <p className="italic text-gray-600">~ Nature’s Goodness in Every Spoon ~</p>
        <blockquote className="mt-4 max-w-3xl mx-auto text-lg font-medium text-gray-700"> 
          “We are committed to providing authentic, high-quality food products and ingredients,
          ensuring excellent packaging, timely delivery, and efficient after-sales service to achieve
          the highest level of customer satisfaction worldwide.”
        </blockquote>
      </header>

      {/* About Us Section */}
      <section className="px-6 md:px-20 py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
          <span className="mr-2">❖</span> About Us
        </h2>
        <p className="mb-6 text-gray-700">
          At <span className="font-semibold">Fruto Foods</span>, we believe that nature holds the secret to true health and wellness. Our journey
          began with a simple vision – to bring natural, safe, and high-quality food powders and
          ingredients to people everywhere.
        </p>

        <Card className="shadow-lg rounded-2xl border-none bg-white">
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-6 items-center"
            >
              <div className="flex justify-center">
                <Leaf size={120} className="text-green-600" />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in crafting a wide range of products including fruit powders, vegetable
                  powders, spices, grains, pulses, and millets – all processed with care to preserve their
                  natural taste and nutrition. From handpicking the freshest produce to following strict
                  hygienic practices, every step of our process is designed to maintain purity and quality.
                  With advanced processing methods like drying and grinding, we ensure that our products
                  remain rich in nutrients and flavor.
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>

        <p className="mt-6 text-gray-700">
          At Fruto Foods, quality and safety are not just promises but values we live by. Every product
          goes through thorough checks for consistency, freshness, and taste before reaching you.
          Driven by innovation and guided by integrity, we strive to be a brand that families can
          always rely on. With Fruto Foods, you don’t just get food – you get a promise of health,
          purity, and care.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-md rounded-2xl border-t-4 border-red-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center">
              <span className="mr-2">❖</span> Our Mission
            </h3>
            <p className="text-gray-700">
              Our Mission is to deliver World-Class Products and Services with excellence in Quality,
              Packaging, Delivery, and Customer Care – ensuring the utmost Satisfaction of people
              Worldwide.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl border-t-4 border-red-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center">
              <span className="mr-2">❖</span> Our Vision
            </h3>
            <p className="text-gray-700">
              To build Trust among people, we EnVision becoming the industry’s leading producer,
              recognizing for our commitment to delivering high-quality products that truly meet
              people’s needs.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600 text-sm">
        © {new Date().getFullYear()} Fruto Foods. All Rights Reserved.
      </footer>
    </div>
  )
}

export default AboutUsPage
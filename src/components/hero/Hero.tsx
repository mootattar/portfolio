import avatar from "../../assets/other/avatar.webp";
export default function Hero() {
  const hobbies = [
    { icon: "📚", name: "Reading" },
    { icon: "🏀", name: "Playing Basketball" },
    { icon: "🎮", name: "Playing Games" },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <img
          className="w-[400px] h-[400px] rounded-full border-4 border-blue-200"
          src={avatar}
          alt="avatar"
        />
        <svg width="106" height="266" xmlns="http://www.w3.org/2000/svg">
          <path
            className="animate-svg"
            d="M61.198.507a1.5 1.5 0 01.382 2.087l-2.303 3.33-.827 1.193-.825 1.193C43.417 28.842 36.807 39.58 31.33 52.525c-4.684 11.07-7.309 21.829-7.715 32.75l-.023.704.196-.135c16.868-11.637 39.526-17.52 59.321-15.098l.681.087c19.599 2.597 28.225 18.436 17.679 35.173-7.363 11.686-25.243 20.13-42.941 20.897-19.409.84-33.9-7.542-36.727-24.15a87.107 87.107 0 01-1.16-10.76l-.001-.03-.049.04C6.878 103.302.57 117.6 4.157 132.104l.125.488c3.838 14.607 14.64 23.6 32.947 30.762 1.849.723 5.451 1.993 9.076 3.243l.64.22.637.22.634.217a850.074 850.074 0 008.712 2.944v-.001l.515.183c1.086.388 2.076.756 3 1.117l.456.18c11.593 4.604 19.771 15.05 20.499 25.295.786 11.082-7.186 18.687-21.762 18.687-14.774 0-19.05 12.353-16.321 32.129l-.007-.049 2.055 9.923 3.832-12.036a1.5 1.5 0 012.896.77l-.038.14-5.567 17.493a1.5 1.5 0 01-2.465.63l-.095-.1-12.059-13.842a1.5 1.5 0 012.156-2.08l.106.11 8.296 9.522-2.065-9.972-.017-.1c-1.233-8.937-1.058-16.803 1.073-22.96 2.784-8.044 8.774-12.578 18.22-12.578 12.912 0 19.427-6.215 18.77-15.475-.644-9.056-8.06-18.527-18.614-22.72a102.855 102.855 0 00-3.36-1.26l-.505-.179.007.003-.011-.002a77.71 77.71 0 01-.893-.295l-.297-.1-.162-.054-.351-.118c-1.777-.596-4.717-1.59-7.777-2.641l-.635-.219-.636-.22c-3.604-1.244-7.176-2.504-9.037-3.231-19.108-7.477-30.62-17.06-34.755-32.794-4.32-16.443 3.043-32.538 18.727-44.806l.453-.353v-.293c.053-11.97 2.676-23.697 7.664-35.725l.344-.82C34.15 38.163 40.836 27.3 55.158 6.603l.826-1.194.826-1.194c1.02-1.471 1.644-2.374 2.301-3.326a1.5 1.5 0 012.087-.382zM25.492 88.313c-.517.357-1.026.718-1.527 1.082l-.392.287.008.4a83.3 83.3 0 001.043 11.347l.135.82c2.534 14.888 15.587 22.439 33.64 21.657 16.79-.727 33.752-8.738 40.532-19.499 9.327-14.801 1.987-28.279-15.534-30.6-19.2-2.545-41.443 3.15-57.905 14.506z"
            fill-rule="nonzero"
          />
        </svg>
        <div className="lvl1">
          <div className="p-8">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Who I{`'`}m ?
                </h1>
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl text-gray-700 font-bold">
                    🙋‍♂️ I am Abdulrahman Al Attar.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    📱💻 I am a Front-end Developer who has worked on several
                    projects independently. 🌟 I am committed to continuous
                    learning 📚 and aspire to achieve a distinguished position
                    in this field.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl text-center text-gray-800">
                  My hobbies
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.name}
                      className="px-4 py-2 text-lg bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg"
                    >
                      {hobby.icon} {hobby.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
}

import { Cohere, CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
    token: 'kEXIZWrAGxmykrgCjZQaL6ZybRjoUSInQamDRZVO',
  });

export default function DescriptionAndDetails({artName}:{artName: React.ReactNode}) {
  console.log(artName)
  const newDescription = (async () => {
    const response = await cohere.chat({
      message: artName + " is the name of the artpiece. Write a single paragraph about this original artpeice with an artistic perspective and must be less than 45 words"
    });

    console.log("Response : " + response.text);
    return (response.text);
  })();

  // const newHighlight = (async () => {
  //   const response = await cohere.chat({
  //     message: "Write 2 highlights about the artpiece called " + artName + " as well as 2 highlights about the material of the artpiece . Each highlight must be less than 10 words. Discard the numbering system. Don't mention anything with the artpiece's name"
  //   });

  //   console.log(response.text);
  //   return (response.text);
  // })();
  //     const fetchHighlight = newHighlight;

  const newDetail = (async () => {
    const response = await cohere.chat({
      message: "Write about how " + artName + ", the artpiece has been precisely and carefully detailed and describe what artistic material has been used and must less than 50 words."
    });

    console.log(response.text);
    return (response.text);
  })();

      
    return (
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{newDescription}</p>
              </div>
            </div>

            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
              <p className="text-sm text-gray-600">{newHighlight}</p>
              </div>
            </div> */}

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{newDetail}</p>
              </div>
            </div>
          </div>
    )
}
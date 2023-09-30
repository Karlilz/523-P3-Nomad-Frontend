const URL="https://nomad-blog.onrender.com"

// travel blog LOADER
export const travelBlogLoader = async () => {
  const response = await fetch(URL+'/travelblog')
  const travelblog = await response.json()
  console.log(travelblog); 
  return travelblog
}

// SHOW LOADER 
export const showLoader = async ({params}) => {
    const res = await fetch(URL+'/travelblog/' + params.id)
    const travelblog = await res.json()
    console.log(travelblog); 
    return travelblog;
  }
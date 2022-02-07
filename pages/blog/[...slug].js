import { useRouter } from "next/router";

function BlogShowPage() {
    const router = useRouter();
    console.log(router.query)
    
    return ( 
        <div>
            <h1>Blog Show Page</h1>
        </div>
     );
}

export default BlogShowPage;
# React + TSX Notes

## Client Side Rendering
<ul>
    <li> Large Bundles
    <li> Resource Intensive
    <li> NO SEO
    <li> Less Secure
</ul>

## Server Side Rendering
<ul>
    <li> Smaller Bundles
    <li> Resource Efficient
    <li> SEO
    <li> More Secure (API Keys)
    <li> <b>Server components CANNOT:</b>
    <ul>
        <li> Cannot listen to browser events
        <li> Access browser APIs
        <li> Maintain Sate
        <li> Use Effects
    </ul>
    <li> We want to use mostly server components and only extract small client components from the server components
    <li> Pages router doesn't support server components so we switch to app router
</ul>

## Client Components
<ul>
    <li> Smaller Bundles
    <li> Resource Efficient
    <li> SEO
    <li> More Secure (API Keys)
</ul>

## Data Fetching
Client
<ul>
    <li> useState() + useEffect()
    <li> React Query
</ul>
Server
<ul>
    <li> useState() + useEffect()
    <li> React Query
</ul>

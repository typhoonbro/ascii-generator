import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const {searchParams} = new URL(req.url)
    let text = "a";
    if (searchParams.get("text")) {
      text = searchParams.get("text");
    }
      
    
    const body = figlet.textSync(text, {
      font: "Doom",
      horizontalLayout: "fitted",
    });
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

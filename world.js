document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('lookup');
    const input = document.getElementById('country');
    const results = document.getElementById('result');

    button.addEventListener('click', async () => {
        const country = input.value.trim();
        let url = "world.php";
    
        if (country!== ""){
            url += "?country=" + encodeURIComponent(country);
        }
        
        try {
            const response = await fetch(url);
            const html = await response.text();

            results.innerHTML = html;

        }catch(error){
            results.innerHTML = "<p>Error fetching data</p>";
            console.error(error);
        }
    });
});
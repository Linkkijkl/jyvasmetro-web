# Jyväsmetro 2025 web pages

## Development
To use a development and testing server on localhost:
1. Make sure you have python and npm installed
2. Run `npx static-18n -l fi -i fi -i en www -o .` in project root to generate translations
3. Run `python3 -m http.server` to start local web server
4. Navigate to [http://localhost:8000]()
5. When updating the html, do step 2. again and refresh broser. When updating css, restart the server and refresh the page

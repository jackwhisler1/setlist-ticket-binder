# Ticket Binder

Ticket Binder is a web application built with Next.js and styled with Tailwind CSS. It utilizes the Setlist.fm API to retrieve a user's concert history and generate a digital ticket stub binder.

## Features

- **Setlist Retrieval**: Fetches concert setlists from Setlist.fm API.
- **Ticket Stub Binder**: Generates a digital ticket stub binder for the user's concert history.
- **Tailwind CSS Styling**: Styled with Tailwind CSS for a clean and responsive design.
- **Server-side Rendering**: Utilizes Next.js for server-side rendering, ensuring fast loading times and SEO optimization.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/setlist-ticket-binder.git
   ```

2. **Install dependencies**:

   ```bash
   cd setlist-ticket-binder
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root of the project and add your Setlist.fm API key:

   ```
   SETLIST_API_KEY=your_setlist_fm_api_key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
- [Setlist.fm API](https://api.setlist.fm/docs/1.0/index.html) - API for retrieving concert setlists.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

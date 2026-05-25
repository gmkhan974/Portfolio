export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted">
          © {currentYear} Ghulam Muhammad Khan · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

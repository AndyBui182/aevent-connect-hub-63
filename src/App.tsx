
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/index";
import EventsPage from "./pages/events/index";
import EventDetailPage from "./pages/events/[id]";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/services/index";
import ConnectPage from "./pages/connect/index";
import AboutPage from "./pages/about/index";
import CreateEventPage from "./pages/create";
import CollaborationRequestPage from "./pages/connect/request";

// Auth pages
import SignupPage from "./pages/auth/signup";
import LoginPage from "./pages/auth/login";
import ForgotPasswordPage from "./pages/auth/forgot-password";
import VerifyPage from "./pages/auth/verify";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
            <Route path="/services/*" element={<ServicesPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create" element={<CreateEventPage />} />
            <Route path="/connect/request" element={<CollaborationRequestPage />} />
            
            {/* Auth routes */}
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/verify" element={<VerifyPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

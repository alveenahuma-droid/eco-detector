import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ImageUpload } from "@/components/ImageUpload";
import { AnalysisResult } from "@/components/AnalysisResult";
import { DropOffLocations } from "@/components/DropOffLocations";
import { Leaf } from "lucide-react";

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <nav className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">EcoDetect</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <Hero />
        
        <section className="max-w-4xl mx-auto">
          <ImageUpload 
            onAnalysisComplete={setAnalysisResult}
            isAnalyzing={isAnalyzing}
            setIsAnalyzing={setIsAnalyzing}
          />
        </section>

        {analysisResult && (
          <section className="max-w-4xl mx-auto">
            <AnalysisResult result={analysisResult} />
          </section>
        )}

        <section className="max-w-6xl mx-auto">
          <DropOffLocations />
        </section>
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-background/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>🌱 Together, we can make a difference for our planet</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

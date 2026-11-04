import { Recycle, Smartphone, Leaf } from "lucide-react";

export const Hero = () => {
  return (
    <div className="text-center space-y-6 py-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-medium">
        <Recycle className="h-10 w-10 text-primary-foreground" />
      </div>
      
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Detect E-Waste, Protect Our Planet
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Not sure if something is electronic waste? Upload a photo and our AI will identify it instantly, 
          plus show you where to recycle it responsibly.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pt-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Smartphone className="h-5 w-5 text-primary" />
          </div>
          <span className="text-foreground">Instant Detection</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Recycle className="h-5 w-5 text-primary" />
          </div>
          <span className="text-foreground">Disposal Tips</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Leaf className="h-5 w-5 text-primary" />
          </div>
          <span className="text-foreground">Find Drop-offs</span>
        </div>
      </div>
    </div>
  );
};

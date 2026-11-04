import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

interface AnalysisResultProps {
  result: string;
}

export const AnalysisResult = ({ result }: AnalysisResultProps) => {
  const lines = result.split('\n').filter(line => line.trim());
  // Read the "Category:" line the AI returns. Searching the whole text for
  // "e-waste" gives false positives (e.g. "this is NOT e-waste").
  const categoryLine = lines.find(line => /^category\s*:/i.test(line.trim()));
  const category = categoryLine ? categoryLine.split(':').slice(1).join(':').toLowerCase() : result.toLowerCase();
  const isEWaste = /e-?waste/.test(category) && !/general/.test(category);

  return (
    <Card className="p-6 shadow-medium animate-in fade-in-50 duration-500">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {isEWaste ? (
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-accent" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
          )}
          
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Analysis Results</h3>
              <Badge variant={isEWaste ? "destructive" : "default"} className="shadow-sm">
                {isEWaste ? "E-Waste" : "General Waste"}
              </Badge>
            </div>

            <div className="space-y-2 text-sm">
              {lines.map((line, index) => (
                <p key={index} className="text-foreground">
                  {line}
                </p>
              ))}
            </div>

            {isEWaste && (
              <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/5 border border-accent/20">
                <Info className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Please dispose of this item at an authorized e-waste collection center. 
                  Check the drop-off locations below to find your nearest center.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

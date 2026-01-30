import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingProgressProps {
  currentStep: number;
}

const BookingProgress = ({ currentStep }: BookingProgressProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center gap-4">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                currentStep >= s
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "bg-secondary text-muted-foreground border border-border"
              )}
            >
              {currentStep > s ? <Check className="w-5 h-5" /> : s}
            </div>
            {s < 4 && (
              <div
                className={cn(
                  "w-12 md:w-20 h-1 mx-2 rounded transition-all duration-300",
                  currentStep > s ? "bg-gradient-gold" : "bg-border"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;

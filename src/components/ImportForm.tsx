
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ImportForm() {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Rechnungsnummer</Label>
              <Input id="invoiceNumber" placeholder="z.B. INV-2023-001" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="invoiceDate">Rechnungsdatum</Label>
              <Input id="invoiceDate" type="date" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dueDate">Fälligkeitsdatum</Label>
              <Input id="dueDate" type="date" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="customerName">Kundenname</Label>
              <Input id="customerName" placeholder="Mustermann GmbH" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="customerAddress">Adresse</Label>
              <Input id="customerAddress" placeholder="Musterstraße 123, 12345 Musterstadt" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" type="email" placeholder="kontakt@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Rechnungsbetrag (€)</Label>
              <Input id="amount" type="number" step="0.01" placeholder="0.00" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="taxRate">Steuersatz (%)</Label>
              <Input id="taxRate" type="number" placeholder="19" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currency">Währung</Label>
              <Input id="currency" placeholder="EUR" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Zahlungsmethode</Label>
              <Input id="paymentMethod" placeholder="Überweisung, PayPal, etc." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Anmerkungen</Label>
              <Input id="notes" placeholder="Zusätzliche Informationen..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Input id="status" placeholder="Bezahlt, Offen, etc." />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button type="submit">Speichern</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

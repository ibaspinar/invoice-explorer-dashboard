
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Upload } from 'lucide-react';
import ImportForm from '@/components/ImportForm';

export default function ImportInvoice() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Import Invoice</h1>
      </div>

      {!selectedFile ? (
        <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            accept=".pdf,.xlsx,.csv,.doc,.docx"
          />
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Rechnung hochladen</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            Unterstützte Formate: PDF, XLS, CSV, DOC, DOCX
          </p>
          <Button onClick={openFileDialog}>
            Datei auswählen
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded">
                <Upload className="h-5 w-5 text-blue-600" />
              </div>
              <span className="ml-3 font-medium">{selectedFile.name}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSelectedFile(null)}>
              Ändern
            </Button>
          </div>
          
          <ImportForm />
        </div>
      )}
    </div>
  );
}

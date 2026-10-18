import React from 'react';
import { FileText, Download, ExternalLink, Calendar, ShieldCheck, BadgePercent, Map } from 'lucide-react';
import type { ProjectDocument } from '../../types/project';

interface DocumentDownloadCardProps {
  document: ProjectDocument;
  projectName: string;
}

export const DocumentDownloadCard: React.FC<DocumentDownloadCardProps> = ({ document, projectName }) => {
  const getCategoryIcon = (category: ProjectDocument['category']) => {
    switch (category) {
      case 'Price Sheet':
        return <BadgePercent className="w-5 h-5 text-emerald-600" />;
      case 'Payment Scheme':
        return <ShieldCheck className="w-5 h-5 text-[#C7A76C]" />;
      case 'Map':
        return <Map className="w-5 h-5 text-blue-600" />;
      default:
        return <FileText className="w-5 h-5 text-[#075E54]" />;
    }
  };

  const getBadgeColor = (category: ProjectDocument['category']) => {
    switch (category) {
      case 'Price Sheet':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Payment Scheme':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Map':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-4 rounded-xl border border-gray-200 hover:border-[#075E54] bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
      
      {/* Top info */}
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 shrink-0">
          {getCategoryIcon(document.category)}
        </div>

        <div className="space-y-1 flex-1 min-w-0 text-left">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getBadgeColor(document.category)}`}>
              {document.category}
            </span>
            {document.fileSize && (
              <span className="text-[11px] text-gray-400 font-medium">
                {document.fileSize}
              </span>
            )}
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate" title={document.title}>
            {document.title}
          </h4>

          {document.date && (
            <div className="flex items-center gap-1 text-[11px] text-gray-500">
              <Calendar className="w-3 h-3 text-gray-400" />
              <span>Effective: {document.date}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
        <a
          href={document.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 text-gray-600" />
          <span>Preview PDF</span>
        </a>

        <a
          href={document.fileUrl}
          download={`${projectName}-${document.title}`}
          className="flex-1 py-2 px-3 rounded-lg bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-[#DFCA98]" />
          <span>Download</span>
        </a>
      </div>

    </div>
  );
};

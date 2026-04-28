'use client'

import { useState } from 'react'
import type { DriftTemplate } from '@prisma/client'

export function TemplateEditor({ template }: { template: DriftTemplate | null }) {
  const [title, setTitle] = useState(template?.title ?? '')
  const [body,  setBody]  = useState(template?.body  ?? '')
  const [saving, setSaving] = useState(false)
  const [saved,  setSaved]  = useState(false)

  if (!template) {
    return (
      <div className="border border-[#E8E5DC] rounded-2xl p-8 bg-white">
        <p className="text-sm text-[#A8A49C]">
          Template not found. Run <code className="font-mono text-xs">npx tsx prisma/seed.ts</code>.
        </p>
      </div>
    )
  }

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)
    try {
      const res = await fetch('/api/admin/templates/how-to-drift', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      })
      if (!res.ok) throw new Error('Save failed')
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      console.error('Failed to save template:', err)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="border border-[#E8E5DC] rounded-2xl p-8 bg-white space-y-5">
      <div>
        <p className="text-xs font-semibold text-[#A8A49C] uppercase tracking-widest mb-4">
          How to Drift — template
        </p>

        <label className="block text-xs text-[#A8A49C] mb-1.5">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full text-sm text-[#1C1C19] border border-[#E8E5DC] rounded-lg px-3 py-2 bg-[#FAF8F3] outline-none focus:border-[#C8C4B8] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs text-[#A8A49C] mb-1.5">Body</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          rows={10}
          className="w-full text-sm text-[#1C1C19] border border-[#E8E5DC] rounded-lg px-3 py-2 bg-[#FAF8F3] outline-none focus:border-[#C8C4B8] transition-colors resize-y font-mono leading-relaxed"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="text-sm font-medium bg-[#1C1C19] text-white px-5 py-2 rounded-lg hover:bg-[#2A2A27] disabled:opacity-50 transition-colors"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
        {saved && (
          <span className="text-sm text-[#6B6860]">Saved</span>
        )}
      </div>
    </div>
  )
}

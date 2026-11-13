from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


OUT = Path("output/pdf/abhishek-rewale-resume.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
ORANGE = HexColor("#F26722")
INK = HexColor("#15100D")
MUTED = HexColor("#625B57")
PALE = HexColor("#F3EFEB")
WHITE = HexColor("#FFFFFF")


def header(canvas, _doc):
    canvas.saveState()
    canvas.setFillColor(INK)
    canvas.rect(0, PAGE_H - 42 * mm, PAGE_W, 42 * mm, fill=1, stroke=0)
    canvas.setFillColor(ORANGE)
    canvas.circle(20 * mm, PAGE_H - 21 * mm, 8 * mm, fill=0, stroke=1)
    canvas.setFont("Helvetica-Bold", 17)
    canvas.drawCentredString(20 * mm, PAGE_H - 23.5 * mm, "AR")
    canvas.setFont("Helvetica-Bold", 24)
    canvas.setFillColor(WHITE)
    canvas.drawString(34 * mm, PAGE_H - 17 * mm, "Abhishek Rewale")
    canvas.setFont("Helvetica", 10)
    canvas.setFillColor(HexColor("#CFC8C3"))
    canvas.drawString(34 * mm, PAGE_H - 25 * mm, "FULL-STACK SOFTWARE ENGINEER  /  PRODUCT BUILDER")
    canvas.setFont("Helvetica", 8.5)
    canvas.drawRightString(PAGE_W - 16 * mm, PAGE_H - 17 * mm, "abhishek.rewale.2004@gmail.com")
    canvas.drawRightString(PAGE_W - 16 * mm, PAGE_H - 23 * mm, "+91 77159 96714")
    canvas.drawRightString(PAGE_W - 16 * mm, PAGE_H - 29 * mm, "Airoli, Navi Mumbai, India")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=ORANGE, spaceBefore=7 * mm, spaceAfter=2.5 * mm, uppercase=True, tracking=1.2))
styles.add(ParagraphStyle(name="Role", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=INK, spaceAfter=1.2 * mm))
styles.add(ParagraphStyle(name="Company", fontName="Helvetica", fontSize=9, leading=11, textColor=MUTED))
styles.add(ParagraphStyle(name="Date", fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=ORANGE, alignment=TA_RIGHT))
styles.add(ParagraphStyle(name="BodySmall", fontName="Helvetica", fontSize=8.4, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="BulletSmall", fontName="Helvetica", fontSize=8.2, leading=11.4, leftIndent=4 * mm, firstLineIndent=-3 * mm, bulletIndent=0, textColor=HexColor("#3F3936"), spaceAfter=.7 * mm))
styles.add(ParagraphStyle(name="Skill", fontName="Helvetica", fontSize=7.8, leading=10.5, textColor=MUTED))
styles.add(ParagraphStyle(name="Project", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=INK))


def section(title):
    return [Paragraph(title.upper(), styles["Section"]), HRFlowable(width="100%", thickness=.5, color=HexColor("#D9D1CB"), spaceAfter=3 * mm)]


def job(role, company, period, bullets):
    top = Table([[Paragraph(role, styles["Role"]), Paragraph(period, styles["Date"])]], colWidths=[126 * mm, 42 * mm])
    top.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    items = [top, Paragraph(company, styles["Company"]), Spacer(1, 1.8 * mm)]
    items.extend(Paragraph(f"- {text}", styles["BulletSmall"]) for text in bullets)
    return KeepTogether(items)


story = [Spacer(1, 27 * mm)]
story += section("Profile")
story.append(Paragraph("Full-stack software engineer building production-ready SaaS products across interface design, secure backend workflows, testing, and deployment. Practical experience serving paying customers and translating complex requirements into clear, dependable product experiences.", styles["BodySmall"]))

story += section("Experience")
story.append(job("Independent Full-Stack Developer", "Self-Initiated SaaS Products", "Jun 2026 - Present", [
    "Launched GymPro for two paying gym businesses; deliver ongoing enhancements, support, and fixes.",
    "Building Turfmate for market launch with transaction-backed reservation integrity and owner-scoped authorization.",
    "Own product architecture, authorization, automated testing, cloud workflows, and deployment end to end.",
]))
story.append(Spacer(1, 3.2 * mm))
story.append(job("Frontend Developer Intern", "Springer Capital", "Feb 2026 - May 2026", [
    "Contributed to a production product redesign and translated Figma specifications into responsive Next.js interfaces.",
    "Built Advisor, Operations, and Compliance dashboards with reusable React, TypeScript, Tailwind CSS, and Recharts components.",
    "Collaborated through Git branches, pull requests, code reviews, and structured design feedback.",
]))

story += section("Selected Products")
projects = [
    ("GymPro - Multi-Tenant Gym Management SaaS", "Next.js, TypeScript, Firebase", "Tenant-isolated memberships, renewals, attendance, payments, server-authoritative reports, WhatsApp signup flows, biometric connector gateway, and emulator-backed tests."),
    ("Turfmate - Concurrency-Safe Booking SaaS", "Next.js, TypeScript, Firestore", "Multi-owner public booking, configurable pricing, transaction-backed reservations, conflict checks, idempotent retries, owner authorization, and manual UPI verification."),
    ("Forever - Clothing E-Commerce Platform", "MongoDB, Express, React, Node.js", "Storefront and admin dashboard with JWT authentication, REST APIs, product/cart/order workflows, Cloudinary, Stripe/Razorpay, and separate deployments."),
]
project_cells = []
for title, tech, desc in projects:
    project_cells.append([Paragraph(title, styles["Project"]), Paragraph(f"<font color='#F26722'>{tech}</font><br/>{desc}", styles["Skill"])])
project_table = Table(project_cells, colWidths=[61 * mm, 107 * mm], rowHeights=None)
project_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm), ("TOPPADDING", (0, 0), (-1, -1), 2.2 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 2.2 * mm), ("LINEBELOW", (0, 0), (-1, -2), .35, HexColor("#E1DAD5"))]))
story.append(project_table)

story += section("Skills & Education")
skills = Table([
    [Paragraph("FRONTEND", styles["Project"]), Paragraph("React, Next.js, TypeScript, JavaScript, Tailwind CSS, TanStack Query, Recharts", styles["Skill"])],
    [Paragraph("BACKEND", styles["Project"]), Paragraph("Node.js, Express.js, REST APIs, Zod, JWT, Firebase Cloud Functions", styles["Skill"])],
    [Paragraph("CLOUD & DATA", styles["Project"]), Paragraph("Firebase Authentication, Firestore, MongoDB, Vercel", styles["Skill"])],
    [Paragraph("TESTING & TOOLS", styles["Project"]), Paragraph("Playwright, Firebase Emulator Suite, Git, GitHub, GitHub Actions", styles["Skill"])],
    [Paragraph("EDUCATION", styles["Project"]), Paragraph("BSc Computer Science, JVM Mehta College, Airoli - CGPA 8.21 - 2022-2025", styles["Skill"])],
], colWidths=[40 * mm, 128 * mm])
skills.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 1.7 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.7 * mm)]))
story.append(skills)

doc = SimpleDocTemplate(str(OUT), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=16 * mm, bottomMargin=12 * mm, title="Abhishek Rewale - Resume", author="Abhishek Rewale")
doc.build(story, onFirstPage=header, onLaterPages=header)
print(OUT.resolve())

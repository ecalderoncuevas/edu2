'use client'

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect"
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState
} from "@/components/ui/shadcn-io/dropzone"
import { useState } from "react"

export default function Page() {
  const [files, setFiles] = useState<File[] | undefined>()

  const handleDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    setFiles(acceptedFiles)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header con Breadcrumb */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building I Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

    
        <div className="flex flex-1xº flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
      
            <div className="bg-muted/50 aspect-video rounded-xl flex justify-center items-center">
              <AppleHelloEnglishEffect speed={1.1} />
            </div>

          
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />

            <div className="bg-muted/50 aspect-video rounded-xl flex justify-center items-center p-4">
              <Dropzone
                accept={{ "image/*": [] }}
                maxFiles={10}
                maxSize={1024 * 1024 * 10}
                minSize={1024}
                onDrop={handleDrop}
                onError={console.error}
                src={files}
                className="w-full h-full"
              >
                <DropzoneEmptyState />
                <DropzoneContent />
              </Dropzone>
            </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

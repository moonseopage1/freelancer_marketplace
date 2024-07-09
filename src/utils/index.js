import moment from "moment";
import imgIcon from "../assets/global/icons/photo.png";
import pdfIcon from "../assets/global/icons/pdf.png";
import docxIcon from "../assets/global/icons/docs.png";
import xlsxIcon from "../assets/global/icons/excel.png";
import pptxIcon from "../assets/global/icons/pptx-file.png";
import fileIcon from "../assets/global/icons/documents.png";

/**
 * Validates a URL using a regular expression.
 *
 * @param {string} url - The URL to be validated.
 * @return {boolean} Returns true if the URL is valid, false otherwise.
 */
export const validateUrl = (url) => {
  // Regular expression for URL validation
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};

/**
 * Returns a React component representing an icon for a given file extension.
 *
 * @param {string} extension - The file extension to get the icon for.
 * @return {React.Component} A React component representing an icon for the given file extension.
 */
export function getFileIcon(extension) {
  switch (extension?.toLowerCase()) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
      return imgIcon;
    case "pdf":
      return pdfIcon;
    case "doc":
    case "docx":
      return docxIcon;
    case "xls":
    case "xlsx":
      return xlsxIcon;
    case "ppt":
    case "pptx":
      return pptxIcon;
    default:
      return fileIcon;
  }
}

/**
 * Shortens a file name by removing characters from the middle if the name is longer than 3 characters.
 *
 * @param {string} fileName - The name of the file to be shortened.
 * @return {string} The shortened file name. If the name is shorter than or equal to 3 characters, the original name is returned.
 */
export function shortenFileName(fileName) {
  const nameWithoutExtension = fileName?.substring(
    0,
    fileName?.lastIndexOf(".")
  );
  const extension = fileName?.substring(fileName?.lastIndexOf(".") + 1);
  if (nameWithoutExtension?.length > 3) {
    return (
      nameWithoutExtension?.substring(0, 2) +
      "..." +
      nameWithoutExtension?.charAt(nameWithoutExtension?.length - 1) +
      "." +
      extension
    );
  }
  return fileName;
}

/**
 * Calculates the remaining time until the bidding deadline and formats it as a string indicating the remaining days and hours.
 *
 * @param {string} biddingDeadline - The deadline for bidding in "YYYY-MM-DD HH:mm:ss" format.
 * @return {string} A string indicating the remaining time until the bidding deadline.
 */
export function getRemainingTime(biddingDeadline) {
  // Parse the bidding deadline date
  const deadlineDate = moment?.(biddingDeadline, "YYYY-MM-DD HH:mm:ss");

  // Get the current date and time
  const currentDate = moment?.();

  // Calculate the time difference
  const duration = moment?.duration(deadlineDate?.diff(currentDate));

  // Calculate the remaining days and hours
  const days = Math.floor(duration?.asDays() ?? 0);
  const hours = duration?.hours() ?? 0;

  // Format the result based on the remaining time
  let result;
  if (days > 0) {
    result = `BIDDING ENDS IN ${days} DAYS, ${hours} HOURS`;
  } else {
    const remainingHours = Math.floor(duration?.asHours() ?? 0);
    result = `BIDDING ENDS IN ${remainingHours} HOURS`;
  }

  return result;
}
